import { Link } from 'react-router-dom'

export default function A({ href, target, text, className, ...res }) {
	return (
		<Link
			to={href}
			targe={target}
			className={className}
			{...res}
		>
			{text}
		</Link>
	)
}
