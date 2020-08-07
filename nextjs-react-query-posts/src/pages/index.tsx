import styled from 'styled-components';

import Layout from '../components/layout';

const Title = styled.h1`
  color: red;
`;

export default function Index() {
  return (
    <Layout title="React Query For Posts">
      <Title>Home Page</Title>
    </Layout>
  );
}
