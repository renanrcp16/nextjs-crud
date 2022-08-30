import { useState } from "react";
import Customer from "../interfaces/Customer";
import Button from "./Button";
import Input from "./Input";

interface CustomerFormProps {
	customer?: Customer
	cancelled?: () => void
	onChange?: (customer: Customer) => void
}

export default function CustomerForm(props: CustomerFormProps) {
	const id = props.customer?.id ?? null
	const [name, setName] = useState(props.customer?.name || '')
	const [age, setAge] = useState(props.customer?.age || 0)

	return (
		<div>
			<Input
				description="Nome"
				name="name"
				value={name}
				onChange={setName}
			/>
			<Input
				description="Idade"
				name="age"
				type="number"
				value={age}
				onChange={setAge}
			/>
			<div className="flex justify-between mt-3">
				<Button onClick={props.cancelled}>Cancelar</Button>
				<Button 
					onClick={() => props.onChange?.({id, name, age})}
					color="blue"
				>
					{id ? 'Alterar' : 'Adicionar'}
				</Button>
			</div>
		</div>
	)
}