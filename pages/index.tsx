import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import path from 'path' 
import fs from 'fs'
import Link from "next/link";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });


export default function Home({data}:{data:Array<any>}) {

	// const [first, setfirst] = useState(second)

	return (
		<>
			<Head>
				<title>🦖Markdown Note</title>
				<meta name="description" content="Generated by next.js" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.main}>
				<h2>Articles</h2>
				<Link href='/posts/a'>testLink</Link>
				<ul>
					{data.map(item => item.title)}
				</ul>
			</div>
		</>
	);
}



export async function getStaticProps() {
	const path = require('path') 
	const mdxFileNames:Array<String> = fs.readdirSync(path.resolve(".", "pages","posts" ))

	const fileObject = mdxFileNames.map((fileName)=>{
		const {meta} = require(`./posts/${fileName}`)
		return{
			...meta,
			id: fileName.replace(/.mdx$/, "")
		}
	})
	.sort(function(a,b){
		return(
			(a.date < b.date) ? 1 : -1
		)
	})

	return {
		props: {
			data:fileObject
		},
	};
}
