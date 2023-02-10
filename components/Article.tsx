import Link from "next/link";
import { Heading,Icon,Text } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
type articleObjectType = {
	data: String,
	id: String,
	imgUrl:String,
	link:String,
	outline:String,
	tags:String[]
	title:String,
}
const Article = (props:{propData:articleObjectType[];}) => {
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