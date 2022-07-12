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
      query: { iid },
      session: { user },
    } = req;
    const alreadyDone = await client.initiative.findFirst({
      where: {
        userId: user?.id,
        id: +iid.toString(),
      },
      select: {
        id: true,
        hasDone: true,
        userId: true,
      },
    });
    if (alreadyDone?.hasDone === true) {
      await client.initiative.update({
        where: {
          id: +iid.toString(),
        },
        data: {
          hasDone: false,
        },
      });
    } else {
      await client.initiative.update({
        where: {
          id: +iid.toString(),
        },
        data: {
          hasDone: true,
        },
      });
    }
    console.log(alreadyDone);
    res.json({
      ok: true,
    });
  }
  if (req.method === "GET") {
    const {
      query: { iid },
      session: { user },
    } = req;
    const initiative = await client.initiative.findUnique({
      where: {
        id: +iid.toString(),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        keyResult: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      initiative,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST", "PATCH"],
    handler,
  })
);
