import Header from './Header'
import Footer from './Footer'
import Container from './Container'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>
				<Container>
					{children}
				</Container>
			</main>
			<Footer />
		</>
	)
}
