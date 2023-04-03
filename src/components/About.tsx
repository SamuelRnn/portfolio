import Image from 'next/image'
import dog from '../../public/shiba.png'
import Title from './Title'

export default function About() {
	return (
		<>
			<div id="about" />
			<div className="bg-neutral-200 h-full rounded-t-[1.8rem] lg:rounded-b-lg mx-auto w-box px-4 pt-8 text-main-dark relative overflow-hidden translate-y-12">
				<div className="grid grid-about max-md:grid-cols-1 mt-6 pb-[380px] md:pb-28">
					{/* content */}
					<div className="bg-accent/[.08] rounded-lg z-10">
						<Title content="who am i" shadow="about" />
						<p className="my-auto px-2">
							Hello!👋 And welcome to my portfolio, my name is Samyr Perez, but
							you can call me{' '}
							<span className="bg-accent text-zinc-200 font-accent px-1 rounded-md">
								Samuel.
							</span>{' '}
							Dog lover and music enjoyer.
						</p>
						<p className="my-auto px-2 py-3">
							I&apos;m a passionate{' '}
							<span className="text-accent font-accent">
								Full-Stack Developer
							</span>{' '}
							who&apos;s always in the search for knowledge. With my{' '}
							<span className="text-accent font-accent">high-end</span>{' '}
							skillset, I aim to deliver the best and most{' '}
							<span className="text-accent font-accent">scalable</span> results
							for every project I work on. Whether it&apos;s developing robust
							back-end solutions or crafting engaging user interfaces, I&apos;m
							always up for a challenge!
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
