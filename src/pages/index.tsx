import Head from 'next/head'
import { Header, Layout, About, Projects, Contact, Footer } from '@/components'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
/* svg backgrounds by SVGBackgrounds.com */

export default function Home() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	}, [])
	return (
		<>
			<Head>
				<title>Samuel Perez | Full-stack Developer</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Samuel Perez portfolio" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Samuel Perez | Full-stack Developer"
				/>
				<meta property="og:url" content="https://samuelrnn.vercel.app/" />
				<meta property="og:description" content="Samuel Perez portfolio" />
				<meta property="og:image" content="https://i.imgur.com/KIrNTSN.png" />
				<link rel="icon" href="/icon.svg" />
			</Head>
			<Toaster position="bottom-center" />
			<Layout />
			<Header />
			<main className="bg-main-dark">
				<About />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</>
	)
}
