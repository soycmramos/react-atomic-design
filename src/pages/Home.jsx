import Container from '../components/Container'
import Card from '../components/Card'
import cards from '../data/cards.json'

export default function Home() {
	return (
		<section className='py-10'>
			<Container className={'grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
				{
					cards.map(card => {
						return (
							<Card
								key={card.id}
								img={card.img}
								title={card.title}
								desciption={card.description}
							/>
						)
					})
				}
			</Container>
		</section>
	)
}
