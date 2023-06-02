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
			"articleId": 1,
			"comments": [
				{
					"comment": "コメント1",
					"userName": "ユーザーネーム"
				},
				{
					"comment": "コメント2",
					"userName": "ユーザーネーム2"
				}
			]
		},
		{
			"articleId": 2,
			"comments": [
				{
					"comment": "コメント3",
					"userName": "ユーザーネーム3"
				}
			]
		}
	]);
}
