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
  } = req;
  const replies = await client.postCommentReply.findMany({
    where: {
      postId: +id.toString(),
    },
    include: {
      createdBy: { select: { id: true, name: true, avatar: true } },
      createdFor: { select: { id: true, name: true } },
      _count: {
        select: {
          postCommentReplyThumbs: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    replies,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
