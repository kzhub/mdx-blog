import { List } from "@chakra-ui/react";
import ArticleLinkButton from "../molecules/ArticleLinkButton";
import { articleObjectType } from "@/types";

const ArticleList = (props: { propData: articleObjectType[]; }) => {
	return (
		<List >
			{props.propData.map((item: any, index: number) => (
				<ArticleLinkButton key={index} data={item} />
			))}
		</List>
	);
}

export default ArticleList;