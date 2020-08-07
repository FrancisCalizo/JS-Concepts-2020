import { Post } from '../types/index';

interface Props {
  post: Post;
}

export default function PostItem({ post }: Props) {
  return (
    <>
      <li>{post.title}</li>
    </>
  );
}
