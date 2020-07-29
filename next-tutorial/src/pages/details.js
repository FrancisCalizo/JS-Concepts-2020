import Link from 'next/link';

export default function Details() {
  // Fake Data for Dynamic Pages
  const foods = [
    { type: 'fruit', name: 'orange' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'junk', name: 'potato chips' },
  ];

  fetch('http://localhost:3000/api/foods')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>Details Page</h1>
      {foods.map((food) => (
        <div key={food.name}>
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
