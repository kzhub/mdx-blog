import { useState } from "react"
import axios from 'axios'
import useSWR from "swr"
import { Skeleton } from "@chakra-ui/react"

const GetComments = () => {
	const { data, isLoading ,error } = useSWR('/api/comments',axios);

	if (isLoading) {
		return <Skeleton height="200px" />;
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