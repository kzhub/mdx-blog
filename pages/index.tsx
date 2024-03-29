import Head from "next/head";
import fs from 'fs'
import Navigation from "@/components/organisms/Navigation";
import {
	Tabs, 
	TabPanels,
	TabPanel,
} from '@chakra-ui/react'
import ArticleList from "@/components/organisms/ArticleList";
import { articleObjectType } from "@/types";

export default function Home({ data }: { data: Array<articleObjectType> }) {
	const cats: String[] = []
	data.map((cat) => (
		cats.push(...cat?.tags)
	))
	const catArray:String[]= Array.from(new Set(cats))

	return (
		<>
			<Head>
				<title>🦖</title>
				<meta name="description" content="MDX BLOG Generated by next.js" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
				<Tabs variant='soft-rounded' colorScheme='teal'>
					<Navigation catArray={catArray} data={data} />

					<TabPanels>
						<TabPanel>
							<ArticleList propData={data} />
						</TabPanel>

						{catArray.map(function (value) {
							const result = data.filter(function (data) {
								if (data.tags.includes(value) === true) {
									return true
								}
							})
							const newArray = [...result]

							return (
								<TabPanel key='value'>
									<ArticleList propData={newArray} />
								</TabPanel>
							)
						})}
					</TabPanels>
				</Tabs>
		</>
	);
}

export async function getStaticProps() {
	const path = require('path')
	const mdxFileNames: Array<String> = fs.readdirSync(path.resolve(".", "pages", "posts"))

	const fileObject = mdxFileNames.map((fileName) => {
		const { meta } = require(`./posts/${fileName}`)
		return {
			...meta,
			id: fileName.replace(/.mdx$/, "")
		}
	})
		.sort(function (a, b) {
			return (
				(a.date < b.date) ? 1 : -1
			)
		})

	return {
		props: {
			data: fileObject,
		},
	};
}
