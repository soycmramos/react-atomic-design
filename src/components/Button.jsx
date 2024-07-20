export default function Button({ text, onClick, ...res }) {
	return (
		<button
			onClick={onClick}
			{...res}
		>
			{text}
		</button>
	)
}
