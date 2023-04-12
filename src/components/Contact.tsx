export default function Contact() {
	return (
		<section
			id="contact"
			className="h-screen bg-no-repeat bg-cover bg-fixed"
			style={{ backgroundImage: 'url(/peaks.svg)' }}
		>
			<div className="w-box mx-auto pt-28 grid grid-cols-2 gap-10">
				<div>
					<h2 className="font-titles uppercase text-xl pb-8">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id
						harum, at autem animi alias tempore dicta nobis dolores tempora
						laboriosam vitae. Architecto aliquid inventore fuga accusantium
						eligendi praesentium eius.
					</p>
				</div>
				<div className="place-self-center w-full h-[500px] bg-main-mid rounded-2xl shadow-xl"></div>
			</div>
		</section>
	)
}
