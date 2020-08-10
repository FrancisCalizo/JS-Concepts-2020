import { useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const {
    data: post,
    status,
  }: { data: Post | undefined; status: string } = useQuery(
    ['post', { id: props.post.id }],
    getPost,
    {
      initialData: props.post,
      onSettled: () => {
        console.log(status);
      },
      onSuccess: (data) => {
        console.log(data);
        setUpdatedPost({
          title: data?.title,
          body: data?.body,
        });
      },
    }
  );

  return (
    <Layout title={post?.title}>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <UpdatePost post={post} />
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
