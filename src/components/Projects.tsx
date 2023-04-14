import Image from 'next/image'

const projectsData = [
	{
		image: 'https://ucarecdn.com/e35c7d12-3b26-49fd-8d45-4bb42210e2e1/',
		title: 'senvii',
		description:
			'Professional demo project that aims to showcase the virtues of a intelligent roadway diagnosis. Includes a progressive form, authentication and profile management, protected routes and responsive design',
	},
	{
		image: 'https://ucarecdn.com/69d43d54-d2e4-4aa4-94b8-6fbee635b459/',
		title: 'liteflix',
		description:
			'This project replicates a Netflix-like UI for a technical challenge. It has smooth animations and data upload with local storage. As an extra functionality, the app detects if your trying to upload a file that is not an image.',
	},
	{
		image: 'https://ucarecdn.com/e4e5495c-ac63-4c7f-aaf0-bbc0982701c8/',
		title: 'lazy buy',
		description:
			'Marketplace platform for small and medium businesses! Designed to be practical and user-friendly, with stripe payments, a virtual office and may more features. Developed as Final Project for Henry Bootcamp.',
	},
	{
		image: 'https://ucarecdn.com/f3094714-2ce5-425e-9170-53311d956dc5/',
		title: 'gamexplore',
		description:
			'Videogames showcase SPA, using a public api. Main features: Controlled creation form, sorting, filtering, pagination, responsive design and persistance of data using local storage. Developer as Individual Project for Henry Bootcamp.',
	},
	{
		image: 'https://ucarecdn.com/803732bd-ffa1-4608-b918-bf280c6b6877/',
		title: 'spin off',
		description:
			'User-friendly platform with a vast database of movies and TV shows.',
	},
]

export default function Projects() {
	return (
		<section className="py-28 mx-auto w-box" id="projects">
			<h2 className="text-3xl uppercase font-titles text-center">Projects</h2>

			<div className="mt-12 w-full flex flex-wrap justify-center gap-x-8 gap-y-16">
				{projectsData.map(project => (
					<div key={project.title} className="w-full min-[600px]:max-w-xs">
						<Image
							src={project.image}
							width={600}
							height={400}
							className="aspect-[3/2] object-cover object-center rounded-lg block"
							alt={project.title}
						/>
						<div className="mt-4">
							<p className="text-center text-emerald-500">{project.title}</p>
							<p className="text-base mt-2 text-justify text-zinc-400 h-40">
								{project.description}
							</p>
							<div className="flex justify-between">
								<p></p>
								<p></p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
