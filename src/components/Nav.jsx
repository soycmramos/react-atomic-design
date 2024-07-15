import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<nav>
			<ul className='flex gap-4'>
				<li>
					<Link to={'#'} className='py-2 px-4 border border-gray-100 bg-gray-100 hover:bg-gray-200 hover:border-gray-200'>Lorem</Link>
				</li>
				<li>
					<Link to={'#'} className='py-2 px-4 border border-gray-100 hover:bg-gray-200 hover:border-gray-200'>Ipsum</Link>
				</li>
			</ul>
		</nav>
	)
}
