import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
	return (
		<Html lang="ja">
			<Head />
			<body>
				<h1>
					<Link href='/'>
					Markdown Note
					</Link>
				</h1>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
