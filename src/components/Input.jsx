export default function Input({ type, className, ...res }) {
	return (
		<input
			type={type}
			className={className}
			{...res}
		/>
	)
}
