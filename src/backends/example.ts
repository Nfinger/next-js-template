export const fetchExampleObjects = async () => {
  const res = await fetch(`${process.env.DOMAIN}/api/example`);
  return res.json();
};
