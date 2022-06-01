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
  const post = await client.post.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      postComments: {
        select: {
          content: true,
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      },
      postThumbs: {
        select: {
          id: true,
          user: {
            select: {
              id: true,
            },
          },
        },
      },
      _count: {
        select: {
          postCommentReplies: true,
          postThumbs: true,
          postComments: true,
        },
      },
    },
  });
  const isThumb = Boolean(
    await client.postThumb.findFirst({
      where: {
        postId: +id.toString(),
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );
  res.json({
    ok: true,
    post,
    isThumb,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
