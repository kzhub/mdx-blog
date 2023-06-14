import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req, res) {
	try {
		const updatedLikes = await prisma.articleLikes.update({
			where: { id: `${req.body.id}` },
			data: { likeCount: { increment: 1 } },
		});
	} catch (error) {
		console.error(error);
	}
}
