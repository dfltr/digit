import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const dogRes = await fetch('https://random.dog/woof.json');
  const dog = await dogRes.json();

  res.statusCode = 200;
  res.json(dog);
};
