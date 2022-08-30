interface ButtonProps {
	color?: 'green' | 'blue' | 'gray'
	className?: string
	children: any
}

export default function Button(props: ButtonProps) {
	const color = props.color ? props.color : 'gray'

	return (
		<button className={`
			text-white p-2 rounded-md
			bg-gradient-to-r from-${color}-400 to-${color}-700
			${props.className}
		`}>
			{props.children}
		</button>
	)
}