import Link from "next/link";
import { Heading,Icon,Text } from "@chakra-ui/react";
import { AddIcon, LinkIcon, SearchIcon } from "@chakra-ui/icons";
const Article = (props:any) => {
	return (
		<ul>
			{props.propData.map((item:any) => (
				<li key={item.id}>
					<Link href={`/posts/${item.id}`}>
						<Heading 
							as='h3' 
							size='s' 
							noOfLines={1}
							color='#4A5568'
							mt='24px'
						>
							<Icon boxSize='12px' as={LinkIcon} mr='8px' />
							{item.title}
						</Heading>
						<Text fontSize='10px'>{item.date}</Text>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Article;