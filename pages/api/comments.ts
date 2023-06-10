// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>//仮
) {
  res.status(200).json([
    {
      articleId: 20230601,
			like:10,
      comments: [
        {
          comment: '20230601コメント1',
          userName: '20230601ユーザーネーム',
        },
        {
          comment: '20230601コメント2',
          userName: '20230601ユーザーネーム2',
        },
      ],
    },
    {
      articleId: 20230602,
			like:12,
      comments: [
        {
          comment: '20230602コメント2',
          userName: '20230602ユーザーネーム',
        },
        {
          comment: '20230602コメント2',
          userName: '20230602ユーザーネーム2',
        },
      ],
    },
    {
      articleId: 20230603,
			like:10,
      comments: [
        {
          comment: '20230603コメント1',
          userName: '20230603ユーザーネーム',
        },
        {
          comment: '20230603コメント2',
          userName: '20230603ユーザーネーム2',
        },
      ],
    },
  ]);
}
