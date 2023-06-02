import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { Heading } from '@chakra-ui/react'
import GetComments from '@/components/GetComments'

const components = {
	h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Heading as="h1" size="xl" color="">
      {props.children}
    </Heading>
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Heading as="h2" size="lg" color="">
      {props.children}
    </Heading>
  ),
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
				<GetComments />
      </MDXProvider>
    </ChakraProvider>
  )
}
