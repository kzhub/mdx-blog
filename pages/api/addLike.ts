import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req, res) {
	const {id,currentLike} = req.body
	try {
		if(currentLike === 0){
			const newLikes = await prisma.articleLikes.create({
				data: { id: id, likeCount: 1 },
			});
		}else{
			const updatedLikes = await prisma.articleLikes.update({
				where: { id: `${id}` },
				data: { likeCount: { increment: 1 } },
			});
		}
	} catch (error) {
		console.error(error);
	}
}
