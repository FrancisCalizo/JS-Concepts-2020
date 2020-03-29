const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  },
  {
    title: 'Holes',
    author: 'Stanley Yelnats'
  }
];

const resolvers = {
  Query: {
    books: () => books
  }
};

module.exports = resolvers;
