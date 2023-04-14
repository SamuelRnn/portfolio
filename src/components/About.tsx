export default function About() {
	return (
		<section
			id="about"
			className="bg-no-repeat bg-cover bg-fixed bg-center"
			style={{ backgroundImage: 'url(/diagonals.svg)' }}
		>
			<div className="py-28 mx-auto w-box">
				<h2 className="text-3xl uppercase font-titles text-center">About me</h2>
				<p className="text-emerald-500 mt-6 max-w-lg mx-auto text-center">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
					pariatur illo error quaerat voluptate quasi impedit minima culpa
					praesentium quis, fugiat accusantium ad molestias eveniet itaque in
					rem alias voluptatem!
				</p>
			</div>
		</section>
	)
}
