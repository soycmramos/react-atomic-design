import Container from './Container'

export default function Footer() {
	return (
		<footer className='bg-gray-300 py-10 px-10 text-center mt-auto'>
			<Container>
				{new Date().getFullYear()}
			</Container>
		</footer>
	)
}
