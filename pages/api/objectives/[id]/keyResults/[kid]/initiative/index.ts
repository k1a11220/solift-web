import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const {
      body: { name, deadline },
      session: { user },
    } = req;
    const initiative = await client.initiative.create({
      data: {
        name,
        keyResult: { connect: { id: +req.query.kid.toString() } },
        deadline: new Date(deadline),
        hasDone: false,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      initiative,
    });
  }
  if (req.method === "GET") {
    const {
      query: { id },
      session: { user },
    } = req;
    const initiatives = await client.initiative.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      initiatives,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
