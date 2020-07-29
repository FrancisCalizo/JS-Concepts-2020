import Link from 'next/link';
// import { useState, useEffect } from 'react';

export default function Details({ foods }) {
  // Fake Data for Dynamic Pages from Part 1
  // const foods = [
  //   { type: 'fruit', name: 'orange' },
  //   { type: 'vegetable', name: 'lettuce' },
  //   { type: 'junk', name: 'potato chips' },
  // ];

  // useEffect is not run on the server side
  // nextjs renders the page SS, then useEffect
  // runs in the client
  // const [foods, setFoods] = useState([]);
  // useEffect(() => {
  //   async function loadData() {
  //     let response = await fetch('http://localhost:3000/api/foods');
  //     let data = await response.json();

  //     setFoods(data);
  //   }

  //   loadData();
  // }, []);

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

export async function getServerSideProps() {
  // Fetch data from API via Server Side
  let response = await fetch('http://localhost:3000/api/foods');
  let data = await response.json();

  // Pass data to the page via props
  return { props: { foods: data } };
}
