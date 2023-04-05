interface Title {
	content: string
}

export default function Title({ content }: Title) {
	return (
		<h2 className="mb-6 flex items-center font-titles bg-zinc-200/20 text-4xl px-3 py-1 rounded-2xl uppercase">
			{`<${content}/>`}
		</h2>
	)
}
