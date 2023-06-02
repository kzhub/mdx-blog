import { useState } from "react"
import axios from 'axios'
import useSWR from "swr"
import { SkeletonText,Box,SkeletonCircle} from "@chakra-ui/react"

const GetComments = () => {
	const { data, isLoading ,error } = useSWR('/api/comments',axios);

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

	return (
		<>
			{data.data[0].comments.map((node,index:number) => (
				<li key={index}>
					<p>{node.userName}</p>
					<p>{node.comment}</p>
				</li>
			))}
		</>
	);
}

export default GetComments;