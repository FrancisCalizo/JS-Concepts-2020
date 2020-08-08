import Layout from '../components/layout';
import { GetServerSideProps } from 'next';

import { Post } from '../types/index';

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
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
