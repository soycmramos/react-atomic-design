export default function Button({ text, onClick, className, ...res }) {
	return (
		<button
			onClick={onClick}
			className={className}
			{...res}
		>
			{text}
		</button>
	)
}
