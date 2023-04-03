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
	const sections = [
		{
			title: 'start',
			icon: <AiFillHome className="text-2xl m-2" />,
		},
		{
			title: 'about',
			icon: <HiUser className="text-2xl m-2" />,
		},
		{
			title: 'technologies',
			icon: <HiCode className="text-2xl m-2" />,
		},
		{
			title: 'projects',
			icon: <HiSquares2X2 className="text-2xl m-2" />,
		},
	]

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
						{sections.map(section => (
							<motion.button
								key={section.title}
								onHoverStart={() => setHovered(section.title)}
								onHoverEnd={() => setHovered(null)}
								onClick={() => navigate(section.title)}
								whileTap={{ scale: 0.85 }}
								className="flex items-center justify-center font-accent relative hover:bg-zinc-500/40 rounded-lg transition-colors duration-500 ease-out"
							>
								{section.icon}
								<AnimatePresence>
									{hovered === section.title && (
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
											{section.title}
										</motion.p>
									)}
								</AnimatePresence>
							</motion.button>
						))}
					</nav>
				</div>
				{/* nav ui */}
			</div>
		</div>
	)
}
