import Head from 'next/head'
import { Header, Layout, About, Technologies } from '@/components'
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	})
	return (
		<>
			<Head>
				<title>Samuel Rnn</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* TODO: cambiar esta cosa */}
				<link rel="icon" href="/sword-dog.png" />
				{/* TODO: cambiar esta cosa */}
			</Head>
			<Layout />
			<Header />
			{/* <main className="bg-main-dark text-zinc-200"> */}
			<main>
				<About />
				<Technologies />
			</main>
		</>
	)
}
