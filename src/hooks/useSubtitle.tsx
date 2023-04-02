import { useEffect } from 'react'
import { useWritter } from '@/hooks'

export default function useSubtitle() {
	const { render, output } = useWritter()

	useEffect(() => {
		render('sam perez')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	useEffect(() => {
		if (output === 'sam perez') {
			setTimeout(() => {
				render('full stack developer')
			}, 1500)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [output])
	return { output }
}
