import useSWR from 'swr';
import { useRouter } from 'next/router';
import { SkeletonText } from "@chakra-ui/react";
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
				<FaRegHeart /><SkeletonText mt='4' w={8} noOfLines={1} spacing='4' skeletonHeight='4' />
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
				{likeState === false
					? <FaRegHeart onClick={() => handleClick(likeCount)} />
					: <FaHeart />}
				{likeCount}
			</>
		);
	}
	return null;
};

export default GetLikes;
