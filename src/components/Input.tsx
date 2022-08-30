interface InputProps {
	name: string
	description: string
	type?: 'text' | 'number'
	value: any
	readOnly?: boolean
	className?: string
	onChange?: (props: any) => void
}

export default function Input(props: InputProps) {
	return (
		<div className={`flex flex-col ${props.className}`}>
			<label htmlFor={props.name} className="mb-1">{props.description}</label>
			<input
				id={props.name}
				name={props.name}
				type={props.type ?? 'text'}
				value={props.value}
				readOnly={props.readOnly}
				className={`
					border border-purple-500 rounded-lg
					focus:outline-none p-2 mb-5
					${props.readOnly ? '' : 'focus:border-2'}

				`}
				onChange={(e) => props.onChange?.(e.target.value)}
			/>
		</div>
	)
}