import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req, res) {
	const {id,currentLike} = req.body
	try {
		if(currentLike === 0){
		console.log('hello')
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
