import axios from 'axios'
import useSWR from "swr"
import { useRouter } from 'next/router'
import { SkeletonText,Box,SkeletonCircle} from "@chakra-ui/react"
import LikeButton from './LikeButton'

const GetComments = () => {
	const path = useRouter()
	const currentPath = path.asPath
	const articleId = currentPath.replace(/\/posts\//, "")
	const { data, isLoading ,error } = useSWR('/api/getComments',axios);
	

	if(currentPath === '/'){
		return null
	}

	if (isLoading) {
		return <>
		<Box padding='6' boxShadow='lg' bg='white'>
			<SkeletonCircle size='10' />
			<SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
		</Box>
		<Box padding='6' boxShadow='lg' bg='white'>
			<SkeletonCircle size='10' />
			<SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
		</Box>
		</>;
	}

	if (error) {
		return <div>Error</div>;
	}

	if(data){
		const filteredData = data.data.filter(item => item.id == `${articleId}`);
		
		return (
			<>
				<LikeButton id={articleId} />{filteredData.length === 0 ?0 :filteredData[0]?.likeCount}
			</>
		);
	}
}

export default GetComments;
