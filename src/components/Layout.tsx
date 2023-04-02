import { useScroll, motion } from 'framer-motion'
import { RiSendPlaneFill } from 'react-icons/ri'

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
			<div className="fixed w-full z-50 bottom-0">
				<div className="w-box mx-auto relative flex justify-end">
					<div className="h-12 w-[300px] bg-zinc-800 rounded-t-3xl flex justify-center">
						<p className="thin-text my-auto flex items-center gap-2">
							get in touch
							<RiSendPlaneFill className="text-lg" />
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
