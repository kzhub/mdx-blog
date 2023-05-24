import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@chakra-ui/react'
export default function Document() {
	return (
			<Html lang="ja">
				<Head />
				<body>
					<Header />
						<Box bg='' maxW='453px' h='100%' color='#1D4044' m='0 auto' px='10px'>
						
							<Main />
						</Box>
					<NextScript />
					<Footer />
				</body>
			</Html>
	)
}
