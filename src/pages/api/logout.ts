// pages/api/logout.ts

import type { NextApiResponse } from "next";
import type { Request } from "../../types/server";
import { withSessionRoute } from "../../modules/_utils/withSession";

export default withSessionRoute(function logoutRoute(
  req: Request,
  res: NextApiResponse
) {
  req.session.destroy();
  res.send({ ok: true });
});
