import { useState, ChangeEvent } from 'react';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';

import Layout from '../../components/layout';
import { Post, EditPost } from '../../types';
import UpdatePost from '../../components/UpdatePost';

interface Props {
  post: Post;
}

const getPost = async (_: string, obj: { id: number }) => {
  const res = await fetch(`http://localhost:3001/posts/${obj.id}`);
  const data = await res.json();
  return data;
};

const PostItem = (props: Props) => {
  const [updatedPost, setUpdatedPost] = useState<EditPost>({
    title: '',
    body: '',
  });

  const {
    data: post,
    status,
  }: { data: Post | undefined; status: string } = useQuery(
    ['post', { id: props.post.id }],
    getPost,
    {
      initialData: props.post,
      onSuccess: (data) => {
        setUpdatedPost({
          title: data?.title,
          body: data?.body,
        });
      },
    }
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target);
    // setUpdatedPost((initialState) => {
    //   return {
    //     ...initialState,
    //     [e.target.id]: e.target.value,
    //   };
    // });
  };

  return (
    <Layout title={post?.title}>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <UpdatePost post={post} handleChange={handleChange} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/posts/${context.query.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default PostItem;
