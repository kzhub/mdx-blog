type articleCommentType = {
	comment: String,
	userName: String,
}
const ArticleComments = (props:articleCommentType[]) => {
	
	const dummyComment = [
		{
			comment: 'コメント1',
			userName: 'ユーザーネーム',
		},
		{
			comment: 'コメント2',
			userName: 'ユーザーネーム2',
		},
		{
			comment: 'コメント3',
			userName: 'ユーザーネーム3',
		},
	]
	return (
		<ol>
			{dummyComment.map((node,index) => (
				<li key={index}>
					<p>{node.comment}</p>
					<small>{node.userName}</small>
				</li>
			))}
			
		</ol>
	);
}

export default ArticleComments;