import { useScroll, motion } from 'framer-motion'

export default function Layout() {
	const { scrollYProgress } = useScroll()
	return (
		<>
			<div className="fixed top-0 z-50 w-full">
				<div className="relative h-[10px] w-full">
					<motion.div
						className="absolute w-full h-full bg-accent origin-left"
						style={{
							scaleX: scrollYProgress,
							transition: 'ease-out',
						}}
					/>
				</div>
			</div>
		</>
	)
}
