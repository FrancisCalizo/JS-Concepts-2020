import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f2f2f2;
`;

const LinkContainer = styled.div`
  margin: 0 2rem;

  a {
    text-decoration: none;
  }
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'This is the default title',
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav>
          <LinkContainer>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
          </LinkContainer>
          <LinkContainer>
            <Link href="/about">
              <a>About</a>
            </Link>{' '}
          </LinkContainer>
          <LinkContainer>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </LinkContainer>
        </Nav>
      </header>

      {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  );
};

export default Layout;
