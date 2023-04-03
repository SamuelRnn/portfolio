import Image from 'next/image'
import profile from '../../public/profile.jpeg'
import code from '../../public/code.png'
import useSubtitle from '@/hooks/useSubtitle'
import { useTransform, motion, useScroll } from 'framer-motion'
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsWhatsapp,
	BsFillEnvelopeFill,
} from 'react-icons/bs'

export default function Header() {
	const { output } = useSubtitle()
	const { scrollY } = useScroll()
	const y = useTransform(scrollY, [0, 500], ['0%', '45%'])

	return (
		<header className="h-screen overflow-hidden" id="start">
			<motion.div className="relative h-full" style={{ y }}>
				<Image
					src={code}
					alt="code_hero"
					priority
					className={`object-cover object-left left-0 h-screen`}
				/>
			</motion.div>

			<div className="absolute top-0 flex items-center w-full h-full bg-gradient-to-b from-main-dark/40 via-main-dark/80 to-main-dark overflow-hidden">
				<div className="mx-auto flex flex-wrap justify-center items-center gap-x-10 -mt-16 gap-4">
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
				</div>
			</div>

			{/* Social content */}
			<div className="absolute w-full bottom-0 z-40">
				<div className="flex justify-around mx-auto h-20 w-[280px]">
					<a
						target="_blank"
						href="https://github.com/SamuelRnn"
						className="rounded-lg w-8 h-8 flex justify-center items-center"
					>
						<BsGithub className="text-2xl text-neutral-300" />
					</a>

					<a
						target="_blank"
						href="https://www.instagram.com/samuelrnnv1/"
						className="rounded-lg w-8 h-8 flex justify-center items-center"
					>
						<BsInstagram className="text-2xl text-rose-400" />
					</a>

					<a
						target="_blank"
						href="https://www.linkedin.com/in/sam-p-quino/"
						className="rounded-lg w-8 h-8 flex justify-center items-center"
					>
						<BsLinkedin className="text-2xl text-sky-400" />
					</a>

					<a
						target="_blank"
						href="https://wa.me/51940873811"
						className="rounded-lg w-8 h-8 flex justify-center items-center"
					>
						<BsWhatsapp className="text-2xl text-emerald-400" />
					</a>
					<button className="rounded-lg w-8 h-8 flex justify-center items-center">
						<BsFillEnvelopeFill className="text-2xl text-blue-400" />
					</button>
				</div>
			</div>
		</header>
	)
}
