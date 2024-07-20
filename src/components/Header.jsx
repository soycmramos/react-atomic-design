import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
	return (
		<header className='bg-white fixed top-0 left-0 z-10 w-full h-16'>
			<Container className={`flex justify-between items-center h-full`}>
				<Logo />
				<Nav />
			</Container>
		</header>
	)
}
