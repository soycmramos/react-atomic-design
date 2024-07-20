export default function Input({ type, ...res }) {
	return (
		<input
			type={type}
			{...res}
		/>
	)
}
