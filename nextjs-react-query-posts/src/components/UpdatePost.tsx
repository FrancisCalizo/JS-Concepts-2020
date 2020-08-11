import styled from 'styled-components';

import { Post } from '../types';
import { ChangeEvent } from 'react';

interface Props {
  post: Post | undefined;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TitleInput = styled.input`
  width: 500px;
`;

const UpdatePost = ({ post, handleChange }: Props) => {
  return (
    <div>
      <h2>Edit Post </h2>
      <div>
        <label htmlFor="title">
          <div>Title</div>
          <TitleInput
            type="text"
            name="title"
            id="title"
            value={post?.title}
            onChange={handleChange}
          />
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
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default UpdatePost;
