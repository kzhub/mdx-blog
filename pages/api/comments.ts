import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
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
