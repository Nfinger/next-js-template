import Card from "./Card";

const Components: Record<string, () => JSX.Element> = {
  "foreclosure.eop.200": () => <div>HI this is dave</div>,
  "realtytrac.homepage.002": Card,
  "foreclosure.route.toReg.1": Card,
};

export default Components;
