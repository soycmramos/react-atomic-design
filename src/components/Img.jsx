export default function Img({ src, alt, ...res }) {
	return (
		<img
			src={src}
			alt={alt}
			{...res}
		/>
	)
}
