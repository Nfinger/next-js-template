import { withSessionRoute } from "../../modules/_utils/withSession";

export default withSessionRoute(function userRoute(req, res) {
  res.send({ user: req.session.user });
});
