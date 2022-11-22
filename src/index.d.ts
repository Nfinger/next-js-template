import type { Request } from "./types/server";

interface Session {
  user?: {
    id: number;
    name: string;
    admin: boolean;
  };
}

declare module "next" {
  interface NextApiHandler {
    (req: Request & { session: Session }, res: NextApiResponse): void;
  }
}

declare module "iron-session" {
  interface IronSession {
    user?: {
      id: number;
      name: string;
    };
  }
}
