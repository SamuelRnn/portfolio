import Image from 'next/image'
import vergil from '../../public/vergil.png'
import bg from '../../public/bg.jpg'
import Title from './Title'
import { motion, useTransform, useScroll } from 'framer-motion'

export default function About() {
	const { scrollY } = useScroll()
	const y = useTransform(scrollY, [0, 1000], ['0%', '-40%'])
	const scale = useTransform(scrollY, [0, 2000], [1.6, 0.6])

	return (
		<>
			<div id="about" className="pb-12" />
			<div className="h-full lg:rounded-b-lg mx-auto w-box relative overflow-hidden">
				<div
					className="h-72 grid place-content-center"
					style={{
						clipPath: 'inset(0 0 0 0 round 36px 36px 0% 0%)',
					}}
				>
					<Title content="about" />
					<motion.div
						className="fixed -z-10 top-0 w-full h-screen origin-center left-0"
						style={{ y, scale }}
					>
						<Image src={bg} alt="image" className="object-cover" />
					</motion.div>
				</div>
				<div className="bg-neutral-200 px-4 py-14">
					{/* grid */}
					<div className="grid grid-about max-md:grid-cols-1 gap-6 max-w-3xl mx-auto place-items-center">
						{/* content */}
						<div className="sm:text-lg font-accent text-zinc-700">
							<h3 className="text-4xl mb-6 font-titles text-main-dark">
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
						{/* content */}
						<Image
							src={vergil}
							placeholder="blur"
							width={400}
							height={480}
							className="rounded-xl shadow-md shadow-main-dark"
							alt="dog"
						/>
					</div>
				</div>
			</div>
		</>
	)
}
