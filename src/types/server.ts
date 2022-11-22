import type { NextApiRequest } from "next";
import type { User } from "./auth";

export interface Request extends NextApiRequest {
  session: {
    destroy: () => void;
    save: () => Promise<void>;
    user: User;
  };
}
