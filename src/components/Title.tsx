interface Title {
	content: string
	shadow: string
}

export default function Title({ content, shadow }: Title) {
	return (
		<div className="mb-4 relative h-[90px]">
			<span className="absolute bottom-0 font-titles text-accent/30 leading-[60px] translate-x-4 text-[50px]">
				{shadow}
			</span>
			<h2 className="font-titles text-4xl absolute bottom-0 text-zinc-800">
				{content}
			</h2>
		</div>
	)
}
