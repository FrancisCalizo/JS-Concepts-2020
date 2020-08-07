import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Subheader = styled.p`
  font-size: 22px;
  color: orange;
`;

export default function Index() {
  return (
    <div>
      <Title>Home page</Title>
      <Subheader>This is the home page</Subheader>
    </div>
  );
}
