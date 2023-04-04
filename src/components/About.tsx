import Image from 'next/image'
import dog from '../../public/shiba.png'
import Title from './Title'

export default function About() {
	return (
		<>
			<div id="about" />
			<div className="bg-neutral-200 h-full rounded-t-[1.8rem] lg:rounded-b-lg mx-auto w-box px-4 pt-8 relative overflow-hidden translate-y-12">
				<div className="grid grid-about max-md:grid-cols-1 mt-6 pb-[380px] md:pb-28">
					{/* content */}
					<div className="sm:text-lg font-accent text-main-dark/80">
						<Title content="who am i" shadow="about" />
						<p className="my-auto font-accent">
							Hello!👋 And welcome to my portfolio, my name is Samyr Perez, but
							you can call me{' '}
							<span className="bg-accent text-zinc-200 px-1 rounded-md">
								Samuel.
							</span>{' '}
							Devoted to code, dog lover, music enjoyer and videogames
							enthusiast.
						</p>
						<p className="my-auto px-2 py-3">
							I&apos;m a{' '}
							<span className="text-accent font-accent">
								Full-Stack Developer
							</span>{' '}
							who&apos;s always in the search of new knowledge. With my{' '}
							<span className="text-accent font-accent">high-end</span>{' '}
							skillset, I aim to deliver the{' '}
							<span className="text-accent font-accent">best</span> and most{' '}
							<span className="text-accent font-accent">scalable</span> results
							for every project I work on.
						</p>
						<p className="my-auto px-2 pb-3">
							Whether it&apos;s developing robust back-end solutions or crafting
							engaging user interfaces, I&apos;m always up for a challenge!
						</p>
					</div>
					{/* content */}
				</div>
				<Image
					src={dog}
					placeholder="blur"
					width={400}
					height={480}
					className="absolute object-cover object-bottom max-w-[270px] -right-1 -bottom-1 -z-0"
					alt="dog"
				/>
			</div>
		</>
	)
}
