import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// handler interface
interface Handler {
  // eslint-disable-next-line no-unused-vars
  (req: NextApiRequest, res: NextApiResponse, user: User): void;
}

export const validateRoute = (handler: Handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // here we destructure trax_access_token and then rename it to "token", same as writing const token = req.cookies.TRAX_ACCESS_TOKEN
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, "hello") as { id: number };
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorized" });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};
