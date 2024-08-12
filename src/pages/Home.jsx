import { useEffect } from 'react'
import Card from '../components/Card'
import cards from '../data/cards.json'

export default function Home() {
	useEffect(() => { document.title = 'Home' }, [])
	return (
		<section className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4'>
			{
				cards.map(card => (
					<Card
						key={card.id}
						img={card.img}
						title={card.title}
						desciption={card.description}
					/>
				))
			}
		</section>
	)
}
