import Image from 'next/image'
import profile from '../../public/profile.jpeg'
import { useEffect } from 'react'
import { useWritter } from '@/hooks'

export default function Header() {
	const { render, output } = useWritter()

	useEffect(() => {
		render('sam perez')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	useEffect(() => {
		if (output === 'sam perez') {
			setTimeout(() => {
				render('full stack developer')
			}, 1500)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [output])

	return (
		<header
			className="h-screen bg-left-center bg-cover bg-fixed relative overflow-hidden"
			style={{ backgroundImage: 'url(/code.png)' }}
		>
			<div className="w-full h-full bg-gradient-to-t from-main-dark to-black/30 flex items-center backdrop-blur-[1px]">
				<div className="px-auto w-full flex flex-wrap justify-center items-center gap-x-10 -mt-16">
					<Image
						width={224}
						height={224}
						src={profile}
						alt="img"
						placeholder="blur"
						className="rounded-full shadow-xl shadow-black/40 mb-6"
					/>

					<div className="text-center">
						<h1 className="font-titles text-4xl md:text-5xl drop-shadow-md shadow-white">
							samuel rnn
						</h1>
						<p className="h-2 font-thin uppercase tracking-[.2rem] text-zinc-400 text-sm">
							{output}
						</p>
					</div>
				</div>
			</div>
		</header>
	)
}
