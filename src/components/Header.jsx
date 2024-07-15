import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
	const height = 'h-16'
	return (
		<header className={`bg-white shadow w-full fixed top-0 left-0 z-10 ${height}`}>
			<Container className={`flex justify-between items-center ${height}`}>
				<Logo />
				<Nav />
			</Container>
		</header>
	)
}
