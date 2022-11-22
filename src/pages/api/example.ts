import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const exampleObjects = [
    { id: 1, name: Math.random().toString() },
    { id: 2, name: Math.random().toString() },
  ];
  res.status(200).json({ objects: exampleObjects });
};

export default handler;
