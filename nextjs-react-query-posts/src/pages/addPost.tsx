import { useState, ChangeEvent, FormEvent } from 'react';
import { useMutation, queryCache } from 'react-query';
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

const addPost = async (newPost: AddPost) => {
  const res = await fetch('http://localhost:3001/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  const data = await res.json();
  return data;
};

const AddPost = () => {
  const [newPost, setNewPost] = useState<AddPost>({
    title: '',
    body: '',
    userId: undefined,
  });

  const [mutate, infoObj] = useMutation(addPost);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setNewPost((oldState) => {
      if (e.target.id === 'userId') {
        return {
          ...oldState,
          [e.target.id]: Number(e.target.value),
        };
      }
      return {
        ...oldState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await mutate(newPost);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout title="Add Post">
      <h1>Add a post</h1>
      <form onSubmit={handleSubmit}>
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
      </form>
    </Layout>
  );
};

export default AddPost;
