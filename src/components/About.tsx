export default function About() {
	return (
		<section
			id="about"
			className="bg-no-repeat bg-cover bg-fixed bg-center"
			style={{ backgroundImage: 'url(/diagonals.svg)' }}
		>
			<div className="py-28 mx-auto w-box">
				<h2 className="text-3xl uppercase font-titles text-center">About me</h2>
				<p className=" mt-6 max-w-xl mx-auto text-center">
					Hello! And welcome to my portfolio. My name is Samyr Perez, but you
					can call me Samuel. I&apos;m a passionate, high-end{' '}
					<span className="text-emerald-500">Full Stack Developer</span>. I aim
					to deliver atractive, secure and scalable results for every project I
					work on. Whether it&apos;s developing robust back-end solutions or
					crafting engaging user interfaces, I&apos;m always up for a challange!
				</p>
			</div>
		</section>
	)
}
