import Button from "../components/Button";
import CustomerTable from "../components/CustomerTable";
import CustomerForm from "../components/CustomerForm";
import Layout from "../components/Layout";
import Customer from "../interfaces/Customer";
import { useState } from "react";

export default function Home() {
	const [visible, setVisible] = useState<'table' | 'form'>('table')
	const [customer, setCustomer] = useState<Customer>({id: '', name: '', age: 0})

	const data = [
		{ id: 'psng0s9ef-nfans', name: 'João', age: 18 },
		{ id: 'ja-f9j-ajjlf3kd', name: 'Maria', age: 22 },
		{ id: '9ash9h-h39udhka', name: 'José', age: 30 },
	]

	const selectedCustomer = (customer: Customer) => {
		setCustomer(customer)
		setVisible('form')
	}

	const removedCustomer = (customer: Customer) => {
		console.log(customer.name);
	}

	function saveCustomer(customer: Customer) {
		setVisible('table')
	}

	function newCustomer() {
		setCustomer({id: '', name: '', age: 0})
		setVisible('form')
	}

	return (
		<div className={`
		flex h-screen justify-center items-center
		text-white bg-gray-300
	`}>
			<Layout title="Cadastro Simples">
				{visible === 'table' ? (
					<>
						<div className="flex justify-end">
							<Button 
								className="mb-4" 
								color="green"
								onClick={newCustomer}
							>
								Novo Cliente
							</Button>
						</div>
						<CustomerTable
							customers={data}
							selectedCustomer={selectedCustomer}
							removedCustomer={removedCustomer}
						/>
					</>
				) : (
					<CustomerForm 
						customer={customer}
						cancelled={() => setVisible('table')}
						onChange={saveCustomer}
					/>
				)}
			</Layout>
		</div>
	)
}
