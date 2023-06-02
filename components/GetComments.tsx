import axios from 'axios'
import useSWR from "swr"
import { useRouter } from 'next/router'
import { SkeletonText,Box,SkeletonCircle} from "@chakra-ui/react"

const GetComments = () => {
	const path = useRouter()
	const currentPath = path.asPath
	const articleId = currentPath.replace(/\/posts\//, "")
	const { data, isLoading ,error } = useSWR('/api/comments',axios);
	

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
		return <div>Error: {data.status}</div>;
	}

	if(data){
		const filteredData = data.data.filter(item => item.articleId == `${articleId}`);
		return (
			<>
				{ filteredData[0].comments.map((node,index:number) => (
					<li key={index}>
						<p>{node.userName}</p>
						<p>{node.comment}</p>
					</li>
				))}
			</>
		);
	}
}

export default GetComments;