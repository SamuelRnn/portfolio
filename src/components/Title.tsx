interface Title {
	content: string
	shadow: string
}

export default function Title({ content, shadow }: Title) {
	return (
		<h2 className="mb-6 flex items-center font-titles text-accent/30 text-2xl md:text-4xl">
			{`<${shadow}/>`}
			<span className="font-titles text-zinc-800 ml-3">{content}</span>
		</h2>
	)
}
