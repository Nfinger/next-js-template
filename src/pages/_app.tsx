import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type AppType } from "next/dist/shared/lib/utils";
import type { ConfigCache } from "../modules/_types";

import "../styles/globals.css";
import { useState } from "react";

const configCache: ConfigCache = {
  "123": {
    configId: "fcl.free.seo.v1",
    description:
      "Foreclosure vertical default setting. Core + agent + mortgage + personal loans",
    labels: ["foreclosure", "default", "mortgage", "agent", "personal loan"],
    active: true,
    config: {
      pdb: {
        description: "some description",
        sortPriority: "distance",
        theme: "investment",
      },
      pages: [
        {
          pageType: "homepage",
          name: "Standard welcome page with content",
          description: "Some description",
          config: {
            template: "realtytrac.homepage.001",
            content: "realtytrac.homepage.002",
            flows: [
              //template would provide all flow-trigger placements
              {
                placement: "hero",
                value: "foreclosure.eop.200",
              },
              {
                placement: "block",
                value: "foreclosure.route.toReg.1",
              },
            ],
          },
        }, //end of homepage
      ],
    },
  },
};

const RealtyTrac: AppType = ({ Component, pageProps, ...rest }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} {...rest} />
    </QueryClientProvider>
  );
};

RealtyTrac.getInitialProps = async ({ ctx }) => {
  const pageId = ctx.query.pageId as string;
  const config = pageId ? configCache[pageId] : null;
  return { config };
};

export default RealtyTrac;
