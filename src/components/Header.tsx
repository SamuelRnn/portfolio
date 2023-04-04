import Image from 'next/image'
import profile from '../../public/profile.jpeg'
import code from '../../public/code.png'
import useSubtitle from '@/hooks/useSubtitle'
import { useTransform, motion, useScroll } from 'framer-motion'
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

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
	{
		name: 'whatsapp',
		href: 'https://wa.me/51940673811',
		icon: <BsWhatsapp className="text-2xl text-emerald-400" />,
	},
]
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
					className="object-cover object-left left-0 h-screen"
				/>
			</motion.div>

			<div className="absolute top-0 flex items-center w-full h-full bg-gradient-to-b from-main-dark/50 via-main-dark/70 to-main-dark">
				<div className="mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-x-8 -mt-16 min-[400px]:px-10">
					<Image
						width={224}
						height={224}
						src={profile}
						alt="img"
						placeholder="blur"
						className="rounded-full shadow-lg shadow-black/40 max-sm:w-48"
					/>

					<div className="text-center md:text-left">
						<h1 className="font-titles text-4xl md:text-5xl">samuel rnn</h1>

						<div className="thin-text pl-1 md:text-lg">
							{output}
							<span className="animate-ping font-extrabold">_</span>
						</div>

						{/* Social content */}
						<div className="w-60 mx-auto mt-6">
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
