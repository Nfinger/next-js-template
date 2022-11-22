import { createElement } from "react";

interface HomeProps {
  hero: () => JSX.Element;
  block: () => JSX.Element;
}

export default function Home({ hero, block }: HomeProps) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      {hero && createElement(hero)}
      {block && createElement(block)}
    </div>
  );
}
