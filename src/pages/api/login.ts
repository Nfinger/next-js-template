import type { NextApiResponse } from "next";
import type { Request } from "../../types/server";
import { withSessionRoute } from "../../modules/_utils/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req: Request, res: NextApiResponse) {
  // get user from database then:
  req.session.user = {
    id: 230,
    name: req.body.email,
  };
  await req.session.save();
  res.json({ done: true });
}
