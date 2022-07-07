import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { kid },
    session: { user },
  } = req;
  const keyResult = await client.keyResult.findUnique({
    where: {
      id: +kid.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      objective: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    keyResult,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
