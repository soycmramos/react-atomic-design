import Img from './Img'
import Button from './Button'

export default function Card({ img, title, desciption, className, ...res }) {
	return (
		<article className='bg-white shadow rounded-md' {...res}>
			<div className="overflow-hidden">
				<Img src={img} className='rounded-t-md hover:scale-105 transition-all' />
			</div>
			<div className='p-4'>
				<h4 className='text-lg font-semibold hover:underline hover:cursor-pointer'>{title}</h4>
				<p className='text-sm text-[#62646A] text-ellipsis line-clamp-3 leading-5'>{desciption}</p>
				<Button
					text={'Click'}
					className='w-full py-2 px-4 border mt-2 hover:bg-gray-200'
				/>
			</div>
		</article>
	)
}
