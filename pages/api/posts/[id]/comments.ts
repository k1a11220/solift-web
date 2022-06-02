import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: { content },
  } = req;

  const newContent = await client.postComment.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: +id.toString(),
        },
      },
      content,
    },
  });
  console.log(newContent);
  res.json({
    ok: true,
    content: newContent,
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
