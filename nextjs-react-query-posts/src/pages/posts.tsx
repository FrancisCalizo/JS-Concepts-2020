import Layout from '../components/layout';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';

import { Post } from '../types/index';

type Props = {
  posts: Post[];
};

const getTodos = async () => {
  const res = await fetch('http://localhost:3001/posts');
  const data = await res.json();

  return data;
};

export default function Posts(props: Props) {
  const { data: posts, isFetching } = useQuery('todos', getTodos, {
    initialData: props.posts,
  });

  return (
    <Layout title="Posts">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/posts');
  const data: Post[] = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
