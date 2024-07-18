import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Img from './../components/Img'
import img from '../assets/not-found.png'

export default function NotFound() {
	return (
		<section className='py-10'>
			<Container className='flex flex-col place-items-center gap-4'>
				<Img alt={'Not Found'} src={img} className='w-1/6' />
				<h1 className='text-8xl font-semibold'>404</h1>
				<p className='text-4xl'>Page Not Found</p>
				<Link to={'/'} className='text-xl py-2 px-12 border border-gray-500 hover:bg-gray-500 hover:text-white' >Go back</Link>
			</Container>
		</section>
	)
}
