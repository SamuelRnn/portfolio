import { AiFillHome } from 'react-icons/ai'
import { HiSquares2X2, HiUser } from 'react-icons/hi2'
import { IoMdMail } from 'react-icons/io'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
	const [isDesktop, setIsDesktop] = useState(false)
	const [navState, setNavState] = useState('top')
	const [hovered, setHovered] = useState<null | string>(null)
	const [scrollDirection, setScrollDirection] = useState('up')
	const previousScrollValue = useRef(0)

	useEffect(() => {
		const toggleNav = () => {
			if (window.innerWidth >= 1024) setIsDesktop(true)
			else setIsDesktop(false)
		}
		const scroller = () => {
			if (scrollY > 0) setNavState('out')
			else setNavState('top')
		}

		const detectScrollDirection = () => {
			if (scrollY > previousScrollValue.current) {
				setScrollDirection('down')
			}
			if (scrollY < previousScrollValue.current) {
				setScrollDirection('up')
			}
			previousScrollValue.current = scrollY
		}

		toggleNav()

		window.addEventListener('resize', toggleNav)
		window.addEventListener('scroll', scroller)
		window.addEventListener('scroll', detectScrollDirection)
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
			title: 'projects',
			icon: <HiSquares2X2 className="text-2xl m-2" />,
		},
		{
			title: 'contact',
			icon: <IoMdMail className="text-2xl m-2" />,
		},
	]
	if (isDesktop)
		return (
			<motion.div
				animate={{ y: scrollDirection === 'down' ? -150 : 0 }}
				transition={{ ease: 'easeOut', duration: 0.3 }}
				className="fixed top-5 z-50 w-full flex justify-center"
			>
				{/* nav ui */}
				<div
					className={`w-full max-w-md mx-auto h-16 rounded-2xl flex ${
						navState === 'out'
							? 'border border-white/20 shadow-lg bo shadow-main-dark/50 backdrop-blur-sm bg-main-dark/80'
							: ' border-transparent'
					} transition-all duration-500 ease-out`}
				>
					<nav className="w-full flex justify-evenly items-center text-zinc-300">
						{sections.map(section => (
							<div key={section.title} className="relative flex justify-center">
								<motion.button
									onHoverStart={() => setHovered(section.title)}
									onHoverEnd={() => setHovered(null)}
									// onClick={}
									onTap={() => navigate(section.title)}
									whileTap={{ scale: 0.85 }}
									className="flex items-center justify-center hover:bg-zinc-500/40 rounded-lg transition-colors duration-500 ease-out"
								>
									{section.icon}
								</motion.button>
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
											className="text-base select-none absolute -bottom-11 bg-zinc-800 rounded-full px-3 py-1"
										>
											{section.title}
										</motion.p>
									)}
								</AnimatePresence>
							</div>
						))}
					</nav>
				</div>
				{/* nav ui */}
			</motion.div>
		)
	return <></>
}
