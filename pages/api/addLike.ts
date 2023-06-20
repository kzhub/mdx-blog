import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const {id,currentLike} = req.body
	try {
		if(currentLike === 0){
			const newLikes = await prisma.articleLikes.create({
				data: { id: id, likeCount: 1 },
			});
			return res.status(200).json({ message: 'Success' });
		}else{
			const updatedLikes = await prisma.articleLikes.update({
				where: { id: `${id}` },
				data: { likeCount: { increment: 1 } },
			});
			return res.status(200).json({ message: 'Success' });
		}
	} catch (error) {
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}
