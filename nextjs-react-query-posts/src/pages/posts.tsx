import { GetServerSideProps } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Post } from '../types/index';
import usePosts from '../hooks/usePosts';
import AddPostButton from '../components/AddPostButton';

type Props = {
  posts: Post[];
};

const Title = styled.h1`
  display: inline-block;
  margin-right: 1rem;
`;

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  margin: 1rem auto;
`;

export default function Posts(props: Props) {
  const { data: posts } = usePosts(props.posts);

  return (
    <Layout title="Posts">
      <Title>Posts</Title>
      <AddPostButton />
      <List>
        {posts?.map((post) => (
          <ListItem key={post.id}>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </ListItem>
        ))}
      </List>
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
