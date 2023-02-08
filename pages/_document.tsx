import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { ChakraProvider } from '@chakra-ui/react'

export default function Document() {
	return (
		<ChakraProvider>
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
		</ChakraProvider>
	)
}
