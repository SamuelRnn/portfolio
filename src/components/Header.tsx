import Image from 'next/image'
import profile from '../../public/profile.jpeg'
import code from '../../public/code.png'
import useSubtitle from '@/hooks/useSubtitle'
import { useTransform, motion, useScroll } from 'framer-motion'

export default function Header() {
	const { output } = useSubtitle()
	const { scrollY } = useScroll()
	const y = useTransform(scrollY, [0, 500], ['0%', '50%'])
	const scale = useTransform(scrollY, [0, 210], ['100%', '80%'])

	return (
		<header className="h-screen  overflow-hidden">
			<motion.div className="relative h-full" style={{ y }}>
				<Image
					src={code}
					alt="code_hero"
					placeholder="blur"
					priority
					className={`object-cover object-left left-0 h-screen`}
				/>
			</motion.div>

			<div className="absolute top-0 flex items-center w-full h-full bg-gradient-to-b from-main-dark/20 via-main-dark/80 to-main-dark">
				<motion.div
					style={{ scale }}
					className="mx-auto flex flex-wrap justify-center items-center gap-x-10 -mt-16 py-8 gap-4 sticky top-0"
				>
					<Image
						width={224}
						height={224}
						src={profile}
						alt="img"
						placeholder="blur"
						className="rounded-full shadow-lg shadow-black/40"
					/>

					<div className="text-center">
						<h1 className="font-titles text-4xl md:text-5xl drop-shadow-md shadow-white">
							samuel rnn
						</h1>
						<h2 className="thin-text text-lg">{output}</h2>
					</div>
				</motion.div>
			</div>
		</header>
	)
}
