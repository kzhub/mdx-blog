import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const articleLikes = await prisma.articleLikes.findMany()
		res.status(200).json(articleLikes)
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' })
	} finally {
		await prisma.$disconnect()
	}
}
