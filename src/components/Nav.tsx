import { AiFillHome } from 'react-icons/ai'
import { HiCode } from 'react-icons/hi'
import { HiSquares2X2, HiUser } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
	const [navState, setNavState] = useState('top')
	const [hovered, setHovered] = useState<null | string>(null)

	useEffect(() => {
		const scroller = () => {
			if (scrollY > 0) setNavState('out')
			else setNavState('top')
		}
		window.addEventListener('scroll', scroller)
	}, [])

	const navigate = (id: string) => {
		const section = document.getElementById(id)
		section?.scrollIntoView({
			block: 'start',
			behavior: 'smooth',
		})
	}

	return (
		<div className="fixed top-5 z-50 w-full flex justify-center">
			<div className="w-box mx-4">
				{/* nav ui */}
				<div
					className={`w-full max-w-md mx-auto h-[70px] rounded-2xl flex ${
						navState === 'out'
							? 'border border-white/20 shadow-lg bo shadow-main-dark/50 backdrop-blur-sm bg-main-dark/80'
							: ' border-transparent  -translate-y-5'
					} transition-all duration-300 ease-out`}
				>
					<nav className="w-full flex justify-evenly items-center">
						{/* Start */}
						<motion.button
							onHoverStart={() => setHovered('start')}
							onHoverEnd={() => setHovered(null)}
							onClick={() => navigate('start')}
							className="flex items-center justify-center font-accent relative hover:bg-zinc-500/40 rounded-lg transition-colors duration-500 ease-out"
						>
							<AiFillHome className="text-2xl m-2" />
							<AnimatePresence>
								{hovered === 'start' && (
									<motion.p
										variants={{
											hovered: { opacity: 1 },
											out: { opacity: 0 },
										}}
										initial="out"
										animate="hovered"
										exit="out"
										className="absolute -bottom-9 bg-zinc-800 rounded-full px-3 py-1"
									>
										Start
									</motion.p>
								)}
							</AnimatePresence>
						</motion.button>
						{/* Start */}

						{/* About */}
						<motion.button
							onHoverStart={() => setHovered('about')}
							onHoverEnd={() => setHovered(null)}
							onClick={() => navigate('about')}
							className="flex items-center justify-center font-accent relative hover:bg-zinc-500/40 rounded-lg transition-colors duration-500 ease-out"
						>
							<HiUser className="text-2xl m-2" />
							<AnimatePresence>
								{hovered === 'about' && (
									<motion.p
										variants={{
											hovered: { opacity: 1 },
											out: { opacity: 0 },
										}}
										initial="out"
										animate="hovered"
										exit="out"
										className="absolute -bottom-9 bg-zinc-800 rounded-full px-3 py-1"
									>
										About
									</motion.p>
								)}
							</AnimatePresence>
						</motion.button>
						{/* About */}

						{/* Technologies */}
						<motion.button
							onHoverStart={() => setHovered('technologies')}
							onHoverEnd={() => setHovered(null)}
							onClick={() => navigate('technologies')}
							className="flex items-center justify-center font-accent relative hover:bg-zinc-500/40 rounded-lg transition-colors duration-500 ease-out"
						>
							<HiCode className="text-2xl m-2" />
							<AnimatePresence>
								{hovered === 'technologies' && (
									<motion.p
										variants={{
											hovered: { opacity: 1 },
											out: { opacity: 0 },
										}}
										initial="out"
										animate="hovered"
										exit="out"
										className="absolute -bottom-9 bg-zinc-800 rounded-full px-3 py-1"
									>
										Technologies
									</motion.p>
								)}
							</AnimatePresence>
						</motion.button>
						{/* Technologies */}

						{/* Projects */}
						<motion.button
							onHoverStart={() => setHovered('projects')}
							onHoverEnd={() => setHovered(null)}
							onClick={() => navigate('projects')}
							className="flex items-center justify-center font-accent relative hover:bg-zinc-500/40 rounded-lg transition-colors duration-500 ease-out"
						>
							<HiSquares2X2 className="text-2xl m-2" />
							<AnimatePresence>
								{hovered === 'projects' && (
									<motion.p
										variants={{
											hovered: { opacity: 1 },
											out: { opacity: 0 },
										}}
										initial="out"
										animate="hovered"
										exit="out"
										className="absolute -bottom-9 bg-zinc-800 rounded-full px-3 py-1"
									>
										Projects
									</motion.p>
								)}
							</AnimatePresence>
						</motion.button>
						{/* Projects */}

						{/* Projects */}
						<motion.button
							onHoverStart={() => setHovered('projects')}
							onHoverEnd={() => setHovered(null)}
							onClick={() => navigate('projects')}
							className="flex items-center justify-center font-accent relative hover:bg-zinc-500/40 rounded-lg transition-colors duration-500 ease-out"
						>
							<HiSquares2X2 className="text-2xl m-2" />
							<AnimatePresence>
								{hovered === 'projects' && (
									<motion.p
										variants={{
											hovered: { opacity: 1 },
											out: { opacity: 0 },
										}}
										initial="out"
										animate="hovered"
										exit="out"
										className="absolute -bottom-9 bg-zinc-800 rounded-full px-3 py-1"
									>
										Projects
									</motion.p>
								)}
							</AnimatePresence>
						</motion.button>
						{/* Projects */}
					</nav>
				</div>
				{/* nav ui */}
			</div>
		</div>
	)
}
