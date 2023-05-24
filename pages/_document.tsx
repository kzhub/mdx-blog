import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { Heading } from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function Document() {
	return (
			<Html lang="ja">
				<Head />
				<body>
					<Header />
					
					{/* <h1>
						<Link href='/'>
						Markdown Note
						</Link>
					</h1> */}
					<Main />
					<NextScript />
					<Footer />
				</body>
			</Html>
	)
}
