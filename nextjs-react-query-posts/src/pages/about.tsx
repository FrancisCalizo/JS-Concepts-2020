import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout title="About Page">
      <h1>This is the about page</h1>
      <Link href="/">
        <a> Back Home</a>
      </Link>
    </Layout>
  );
}
