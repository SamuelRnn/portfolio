import Image from 'next/image'
import bg from '../../public/bg.jpg'
import coder from '../../public/coder.svg'
import Title from './Title'
import { motion, useTransform, useScroll } from 'framer-motion'

export default function About() {
	const { scrollY } = useScroll()
	const y = useTransform(scrollY, [0, 1000], ['0%', '-60%'])
	const scale = useTransform(scrollY, [0, 2000], [1.6, 0.6])

	return (
		<>
			<div id="about" className="pb-12" />
			<div className="h-full lg:rounded-b-lg mx-auto w-box relative overflow-hidden">
				{/* parallax */}
				<div
					className="h-72 grid place-content-center"
					style={{
						clipPath: 'inset(0 0 0 0 round 36px 36px 0% 0%)',
					}}
				>
					<Title content="about" />
					<motion.div
						className="fixed -z-10 top-0 bottom-0 w-full h-screen origin-center left-0"
						style={{ y, scale }}
					>
						<Image
							src={bg}
							alt="image"
							className="w-full absolute object-center object-cover bottom-0 h-screen"
						/>
					</motion.div>
				</div>
				{/* parallax */}

				{/* content */}
				<div className="bg-main-900 px-4 py-8 relative overflow-hidden text-zinc-400">
					{/* grid */}
					<div className="grid grid-about max-md:grid-cols-1 gap-6 max-w-[800px] mx-auto place-items-center">
						<div className="text-lg font-accent">
							<h3 className="text-4xl mb-6 font-titles text-accent">
								who am i
							</h3>

							{/* paragraphs */}
							<p className="my-auto font-accent">
								Hello!👋 And welcome to my portfolio, my name is Samyr Perez,
								but you can call me{' '}
								<span className="bg-accent text-zinc-200 px-1 rounded-md">
									Samuel.
								</span>{' '}
								Devoted to code, dog lover, music enjoyer and a videogames
								enthusiast.
							</p>
							<p className="my-auto py-3">
								I&apos;m a{' '}
								<span className="text-accent font-accent">
									Full-Stack Developer
								</span>{' '}
								who&apos;s always in the search of knowledge. With my{' '}
								<span className="text-accent font-accent">high-end</span>{' '}
								skillset, I aim to deliver the{' '}
								<span className="text-accent font-accent">best</span> and most{' '}
								<span className="text-accent font-accent">scalable</span>{' '}
								results for every project I work on.
							</p>
							<p className="my-auto pb-3">
								Whether it&apos;s developing robust back-end solutions or
								crafting engaging user interfaces, I&apos;m always up for a
								challenge!
							</p>
							{/* paragraphs */}
						</div>
						<div className="w-[320px] overflow-hidden">
							<Image src={coder} alt="dev" className="scale-125" />
						</div>
					</div>
				</div>
				{/* content */}
			</div>
		</>
	)
}
