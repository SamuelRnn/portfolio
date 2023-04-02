import { useState, useEffect } from 'react'

enum actions {
	write,
	listen,
	delete,
}
export const useWritter = () => {
	const [input, setInput] = useState('')
	const [renderedText, setRenderedText] = useState('')
	const [index, setIndex] = useState(1)
	const [action, setAction] = useState(actions.listen)

	useEffect(() => {
		if (action === actions.listen) {
			setIndex(1)
			return
		}
		if (action === actions.delete) {
			//clears render and changes action
			if (!renderedText) {
				setTimeout(() => {
					setAction(actions.write)
				}, 500)
				return
			} else {
				setTimeout(() => {
					setRenderedText(renderedText.slice(0, renderedText.length - 1))
				}, 24)
			}
		}
		if (action === actions.write) {
			//ends process
			if (renderedText === input) {
				setAction(actions.listen)
				return
			} else {
				//runs typewrite
				setTimeout(() => {
					setRenderedText(input.slice(0, index))
					setIndex(index + 1)
				}, 50)
			}
		}
	}, [action, renderedText, index, input])

	const render = (input: string): void => {
		setInput(input)
		if (input) {
			setAction(actions.delete)
		} else {
			setAction(actions.write)
		}
	}

	return { output: renderedText, render }
}
