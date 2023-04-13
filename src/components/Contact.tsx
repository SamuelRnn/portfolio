import { FormEvent, useState, useRef, ChangeEvent } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { motion } from 'framer-motion'

const EMAIL_REGEX =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const nameRef: any = useRef(null)
	const emailRef: any = useRef(null)
	const messageRef: any = useRef(null)
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})
	const onChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!Object.values(form).every(value => value)) {
			return toast.error('Fill all fields!', { id: 'fillerror' })
		}
		if (!EMAIL_REGEX.test(form.email)) {
			return toast.error('Type a valid email!', { id: 'emailerror' })
		}
		try {
			const { data } = await axios.post('/api/contact', form)
			console.log(data)
		} catch (error) {
			return toast.error('there was an unexpected error', { id: 'servererror' })
		}
	}

	return (
		<section
			id="contact"
			className="bg-no-repeat bg-cover bg-fixed bg-center"
			style={{ backgroundImage: 'url(/peaks.svg)' }}
		>
			<div className="w-box mx-auto py-32 grid lg:grid-cols-2 gap-10">
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
				<div className="place-self-center w-full max-w-lg h-[500px] bg-main-mid rounded-2xl shadow-xl px-6 py-8">
					<form
						onSubmit={onSubmit}
						acceptCharset="utf-8"
						className="flex flex-col justify-between h-full"
					>
						<div className="flex flex-col gap-4">
							<input
								type="text"
								placeholder="Your name"
								name="name"
								ref={nameRef}
								onChange={onChange}
								className="bg-transparent text-base px-2 py-2 border-b outline-none border-zinc-600 focus:border-accent transition-colors ease-out duration-300"
							/>
							<input
								type="text"
								placeholder="Your email"
								name="email"
								ref={emailRef}
								onChange={onChange}
								className="bg-transparent text-base px-2 py-2 border-b outline-none border-zinc-600 focus:border-accent transition-colors ease-out duration-300"
							/>
							<textarea
								placeholder="Type your message here..."
								name="message"
								ref={messageRef}
								onChange={onChange}
								className="bg-main-dark/10 text-base mt-5 px-2 py-3 outline-none h-44 rounded-md resize-none border border-zinc-600 scrollbar-thin scrollbar-track-white/0 scrollbar-thumb-zinc-600 focus:border-accent transition-colors ease-out duration-300"
							/>
						</div>
						<motion.button
							whileTap={{ scale: 0.9 }}
							// disabled
							type="submit"
							className="text-zinc-200 px-2 py-3 rounded-full bg-zinc-700"
						>
							Let&apos;s talk!
						</motion.button>
					</form>
				</div>
			</div>
		</section>
	)
}
