import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const social_tags = [
	{
		name: 'github',
		href: 'https://github.com/SamuelRnn',
		icon: <BsGithub className="text-2xl" />,
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/samuelrnnv1/',
		icon: <BsInstagram className="text-2xl" />,
	},
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/in/sam-p-quino/',
		icon: <BsLinkedin className="text-2xl" />,
	},
]

export default function Footer() {
	return (
		<div
			className="bg-fixed bg-cover bg-center text-zinc-200/70 text-center h-40"
			style={{
				backgroundImage: 'url(/bg2.jpg)',
			}}
		>
			<div className="w-full flex flex-col justify-center items-center bg-main-dark/80 h-full">
				<div className="w-40 mx-auto">
					<div className="flex justify-between">
						{social_tags.map(({ href, icon, name }) => (
							<a
								key={name}
								target="_blank"
								href={href}
								className="rounded-lg w-8 h-8 flex justify-center items-center"
							>
								{icon}
							</a>
						))}
					</div>
				</div>
				<p className="mt-2 text-base">SamuelRnn | 2023</p>
			</div>
		</div>
	)
}
