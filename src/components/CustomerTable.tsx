import Customer from "../interfaces/Customer"
import { IconPencilSquare, IconTrash } from "./Icon"

interface CustomerTableProps {
	customers: Customer[]
	selectedCustomer?: (customer: Customer) => void
	removedCustomer?: (customer: Customer) => void
}

export default function CustomerTable(props: CustomerTableProps) {

	const showActions = props.selectedCustomer || props.removedCustomer

	return (
		<table className="w-full rounded-xl overflow-hidden">
			<thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
				<tr>
					<th className="text-left px-4 py-2">Nome</th>
					<th className="text-left px-4 py-2">Idade</th>
					{showActions ? (
						<th className="px-4 py-2">Ações</th>
					) : false}
				</tr>
			</thead>
			<tbody>
				{props.customers?.map((customer, i) => {
					return (
						<tr key={customer.id} className={`${i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
							<td className="text-left px-4 py-2">{customer.name}</td>
							<td className="text-left px-4 py-2">{customer.age}</td>
							{showActions ? (
								<td className="text-center px-4 py-2 items-center">
									{props.selectedCustomer ? (
										<button
											onClick={() => props.selectedCustomer?.(customer)}
											className="p-1 text-blue-500 rounded-full hover:text-blue-800 transition-all"
										>
											{IconPencilSquare}
										</button>
									) : ''}
									{props.removedCustomer ? (
										<button
											onClick={() => props.removedCustomer?.(customer)}
											className="p-1 text-red-500 rounded-full hover:text-red-800 transition-all"
										>
											{IconTrash}
										</button>
									) : ''}
								</td>
							) : false}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}