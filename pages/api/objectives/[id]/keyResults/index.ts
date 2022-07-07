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
      body: { name, deadline, initiatives },
      session: { user },
    } = req;
    const keyResult = await client.keyResult.create({
      data: {
        name,
        initiatives,
        objective: { connect: { id: +req.query.id.toString() } },
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
      keyResult,
    });
  }
  if (req.method === "GET") {
    const {
      query: { id },
      session: { user },
    } = req;
    const keyResults = await client.keyResult.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            initiatives: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      keyResults,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
