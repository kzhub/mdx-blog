import Link from "next/link";
import { Heading, Text, ListItem } from "@chakra-ui/react";
import ArticleLinkIcon from "../atoms/ArticleLinkIcon";

interface ArticleLinkButtonProps {
  data: { date: string; id: string; title: string };
}

const ArticleLinkButton = ({ data }: ArticleLinkButtonProps) => {
	const { date, id, title } = data
	
	return (
		<ListItem key={id} m='8px 0'>
			<Link href={`/posts/${id}`}>
				<Heading
					as='h3'
					size='s'
					noOfLines={1}
					color='#4A5568'
				>
					<ArticleLinkIcon />
					{title}
				</Heading>
				<Text fontSize='10px'>{date}</Text>
			</Link>
		</ListItem>
	);
}

export default ArticleLinkButton;