import Image from 'next/image'
import dev from '../../public/dev.png'
import code from '../../public/code.png'
import { useTransform, motion, useScroll, easeOut } from 'framer-motion'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useTypewriter } from 'react-simple-typewriter'

const social_tags = [
	{
		name: 'github',
		href: 'https://github.com/SamuelRnn',
		icon: <BsGithub className="text-2xl text-neutral-300" />,
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/samuelrnnv1/',
		icon: <BsInstagram className="text-2xl text-rose-400" />,
	},
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/in/sam-p-quino/',
		icon: <BsLinkedin className="text-2xl text-sky-400" />,
	},
]

export default function Header() {
	const { scrollY } = useScroll()
	const y = useTransform(scrollY, [0, 800], ['0%', '-14%'])
	const [output] = useTypewriter({
		words: ['samuel perez', 'full stack developer'],
	})

	return (
		<header className="relative" id="start">
			<motion.div
				className="fixed -z-10 top-0 w-full full origin-center left-0 overflow-hidden"
				style={{ y }}
			>
				<Image
					src={code}
					alt="hero banner"
					priority={true}
					className="object-cover object-left h-screen blur-[2px] w-full"
				/>
			</motion.div>

			<div className="flex flex-col justify-center w-full h-screen bg-main-dark/50">
				<div className="mx-auto flex flex-col items-center justify-center gap-4 md:gap-x-8 -mt-16 min-[400px]:px-10">
					<Image
						width={200}
						height={200}
						src={dev}
						alt="samuel picture"
						placeholder="blur"
						className="rounded-full shadow-lg shadow-black/40 max-sm:w-48 brightness-[1.02]"
					/>

					<div className="text-center">
						<h1 className="font-titles text-4xl md:text-5xl uppercase">
							samuel rnn
						</h1>

						<h2 className="thin-text pl-1 font-sans">
							{output}
							<span className="animate-ping font-sans font-extrabold">|</span>
						</h2>

						{/* Social content */}
						<div className="w-40 mx-auto mt-6">
							<div className="flex justify-between">
								{social_tags.map(({ href, icon, name }) => (
									<a
										key={name}
										target="_blank"
										href={href}
										className="rounded-lg w-8 h-8 flex justify-center items-center"
									>
										{icon}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
