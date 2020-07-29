export default (req, res) => {
  res.status(200).json([
    {
      type: 'fruit',
      name: 'apple',
    },
    {
      type: 'vegetable',
      name: 'carrot',
    },
    {
      type: 'meat',
      name: 'steak',
    },
    {
      type: 'grain',
      name: 'rice',
    },
    {
      type: 'dessert',
      name: 'ice cream',
    },
  ]);
};
