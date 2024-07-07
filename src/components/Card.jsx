import Img from './Img'

export default function Card({ img, title, desciption, className, ...res }) {
	return (
		<article className='bg-white shadow-xl rounded-md' {...res}>
			<div className="overflow-hidden">
				<Img src={img} className='rounded-t-md hover:scale-105 transition-all' />
			</div>
			<div className='p-4'>
				<h4 className='text-lg font-semibold hover:underline hover:cursor-pointer'>{title}</h4>
				<p className='text-sm text-[#62646A] text-ellipsis line-clamp-3 leading-5'>{desciption}</p>
			</div>
		</article>
	)
}
