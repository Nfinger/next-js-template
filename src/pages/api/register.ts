import type { NextApiResponse } from "next";
import type { Request } from "../../types/server";

const handler = (req: Request, res: NextApiResponse) => {
  return res.status(200).json({ name: "John Doe" });
};

export default handler;
