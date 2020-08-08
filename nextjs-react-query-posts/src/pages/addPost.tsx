import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

interface AddPost {
  title: string;
  body: string;
  userId: number | undefined;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

const addPost = () => {
  const [newPost, setNewPost] = useState<AddPost>({
    title: '',
    body: '',
    userId: undefined,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setNewPost((oldState) => {
      return {
        ...oldState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <Layout title="Add Post">
      <h1>Add a post</h1>
      <InputContainer onChange={handleChange}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </InputContainer>
      <InputContainer onChange={handleChange}>
        <label htmlFor="body">Body</label>
        <textarea id="body" />
      </InputContainer>
      <InputContainer onChange={handleChange}>
        <label htmlFor="userId">User ID</label>
        <input type="text" id="userId" />
      </InputContainer>
      <div>
        <button type="submit">Add Post</button>
      </div>
    </Layout>
  );
};

export default addPost;
