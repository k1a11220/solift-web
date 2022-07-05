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
      body: { name, keyResults, deadline },
      session: { user },
    } = req;
    const objective = await client.objective.create({
      data: {
        name,
        keyResults,
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
      objective,
    });
  }
  if (req.method === "GET") {
    const {
      query: { id },
      session: { user },
    } = req;
    const objectives = await client.objective.findMany({
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
            keyResults: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      objectives,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
