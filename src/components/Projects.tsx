import Image from 'next/image'

export default function Projects() {
	return (
		<div className="min-h-screen py-28 mx-auto w-box" id="projects">
			<h2 className="text-3xl uppercase font-titles text-center">Projects</h2>
			<div className="mt-12 w-full flex flex-wrap justify-center gap-8">
				<Image
					src={'https://ucarecdn.com/e35c7d12-3b26-49fd-8d45-4bb42210e2e1/'}
					width={300}
					height={600}
					className="aspect-[3:2] object-cover rounded-lg shadow-lg"
					alt="senvii"
				/>
				<Image
					src={'https://ucarecdn.com/803732bd-ffa1-4608-b918-bf280c6b6877/'}
					width={300}
					height={600}
					className="aspect-[3:2] object-cover rounded-lg shadow-lg"
					alt="spinoff"
				/>
				<Image
					src={'https://ucarecdn.com/69d43d54-d2e4-4aa4-94b8-6fbee635b459/'}
					width={300}
					height={600}
					className="aspect-[3:2] object-cover rounded-lg shadow-lg"
					alt="liteflix"
				/>
				<Image
					src={'https://ucarecdn.com/e4e5495c-ac63-4c7f-aaf0-bbc0982701c8/'}
					width={300}
					height={600}
					className="aspect-[3:2] object-cover rounded-lg shadow-lg"
					alt="lazybuy"
				/>
				<Image
					src={'https://ucarecdn.com/f3094714-2ce5-425e-9170-53311d956dc5/'}
					width={300}
					height={600}
					className="aspect-[3:2] object-cover rounded-lg shadow-lg"
					alt="gamexplore"
				/>
			</div>
		</div>
	)
}
