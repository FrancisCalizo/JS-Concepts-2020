import styled from 'styled-components';

import Layout from '../components/layout';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

const addPost = () => {
  return (
    <Layout title="Add Post">
      <h1>Add a post</h1>
      <InputContainer>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="body">Body</label>
        <textarea id="body" />
      </InputContainer>
      <InputContainer>
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
