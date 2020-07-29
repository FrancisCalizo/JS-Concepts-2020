import { useRouter } from 'next/router';

export default function FoodType() {
  const router = useRouter();

  console.log(router.query);

  return (
    <h1>
      {router.query.foods} - {router.query.foodType} Page
    </h1>
  );
}
