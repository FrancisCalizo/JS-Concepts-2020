import styled from 'styled-components';

import { Post } from '../types';

interface Props {
  post: Post | undefined;
}

const TitleInput = styled.input`
  width: 500px;
`;

const UpdatePost = ({ post }: Props) => {
  return (
    <div>
      <h2>Edit Post </h2>
      <div>
        <label htmlFor="title">
          <div>Title</div>
          <TitleInput type="text" name="title" id="title" value={post?.title} />
        </label>
      </div>
      <div>
        <label htmlFor="body">
          <div>Body</div>
          <textarea
            name="body"
            id="body"
            cols={30}
            rows={10}
            value={post?.body}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default UpdatePost;
