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
      body: { title, content, category },
      session: { user },
    } = req;
    const post = await client.post.create({
      data: {
        title,
        content,
        category,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      post,
    });
  }
  if (req.method === "GET") {
    const {
      query: { id, content, category },
      session: { user },
    } = req;
    const posts = await client.post.findMany({
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
            postThumbs: true,
            postComments: true,
            postCommentReplies: true,
          },
        },
        postThumbs: {
          select: {
            userId: true,
          },
        },
      },
      //   where: {
      //     content: true,
      //     category: {
      //       gte: parsedLongitue - 0.01,
      //       lte: parsedLongitue + 0.01,
      //     },
      //   },
    });
    res.json({
      ok: true,
      posts,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
