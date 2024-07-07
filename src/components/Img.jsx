export default function Img({ src, alt, className, ...res }) {
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			{...res}
		/>
	)
}
