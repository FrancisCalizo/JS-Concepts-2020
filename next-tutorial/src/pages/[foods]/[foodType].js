import { useRouter } from 'next/router';

export default function FoodType({ query }) {
  // Router available from useRouter hook
  const router = useRouter();

  return (
    <h1>
      {query.foods} - {query.foodType} Page
    </h1>
  );
}

// getServerSideProps has a context object you can pass
export function getServerSideProps(ctx) {
  const { query } = ctx;
  return { props: { query } };
}
