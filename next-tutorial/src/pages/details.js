import Link from 'next/link';

export default function Details() {
  // Fake Data for Dynamic Pages
  const foods = [
    { type: 'fruit', name: 'orange' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'junk', name: 'potato chips' },
  ];

  return (
    <div>
      <h1>Details Page</h1>
      {foods.map((food) => (
        <div>
          <Link as={`/${food.type}/${food.name}`} href="/[foods]/[foodType]">
            <a>
              Link to {food.type} - {food.name} page
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
