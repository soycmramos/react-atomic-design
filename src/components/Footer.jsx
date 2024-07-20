import Container from './Container'

export default function Footer() {
	return (
		<footer className='bg-neutral-900 py-10 px-10 text-white text-center mt-auto'>
			<Container>
				{new Date().getFullYear()}
			</Container>
		</footer>
	)
}
