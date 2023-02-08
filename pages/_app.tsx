import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
// import { Montserrat } from '@next/font/google'

// const montserrat = Montserrat({
// 	subsets: ['latin'],
// 	weight: "400"
// })
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}
