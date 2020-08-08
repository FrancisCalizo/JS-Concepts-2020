import Link from 'next/link';
import styled from 'styled-components';

const Button = styled.button`
  & a {
    text-decoration: none;
  }
`;

export default function AddPost() {
  return (
    <>
      <Button>
        <Link href="/addPost">
          <a>Add Post</a>
        </Link>
      </Button>
    </>
  );
}
