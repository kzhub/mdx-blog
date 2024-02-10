import useSWR from 'swr';
import { useRouter } from 'next/router';
import { SkeletonText, HStack, Text } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

const GetLikes = () => {
	const path = useRouter();
	const currentPath = path.asPath;
	const articleId = currentPath.replace(/\/posts\//, "");
	const { data, isLoading, error, mutate } = useSWR<any>('/api/getLikes', axios);

	const [likeState, setLikeState] = useState(false);
	const handleClick = async (currentLikeValue: number) => {
		setLikeState(true);
		try {
			await axios.post('/api/addLike', { id: articleId, currentLike: currentLikeValue });
			mutate(data)
		} catch (error) {
			console.error('error');
		}
	};

	if (currentPath === '/') {
		return null;
	}

	if (isLoading) {
		return (
			<>
				<HStack spacing={2} mb='2'>
					<FaRegHeart /><SkeletonText mt='4' w={8} noOfLines={1} spacing='4' skeletonHeight='4' />
				</HStack>
			</>
		);
	}

	if (error) {
		return <div>Error</div>;
	}

	if (data) {
		const filteredData = data.data.filter((item: any) => item.id == `${articleId}`);
		const likeCount = filteredData[0]?.likeCount !== undefined ? filteredData[0]?.likeCount : 0;

		return (
			<>
				<HStack spacing={2} mb='2'>
					{likeState === false ? (
						<FaRegHeart onClick={() => handleClick(likeCount)} />
					) : (
						<FaHeart />
					)}
					<Text fontWeight="bold">{likeCount}</Text>
				</HStack>
			</>
		);
	}
	return null;
};

export default GetLikes;
