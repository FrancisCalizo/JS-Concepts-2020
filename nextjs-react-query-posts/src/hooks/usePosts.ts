import { useQuery } from 'react-query';

import { Post } from '../types/index';

const getPosts = async () => {
  const res = await fetch('http://localhost:3001/posts');
  const data: Post[] = await res.json();

  return data;
};

export default function usePosts(initial: Post[]) {
  return useQuery('posts', getPosts, { initialData: initial });
}
