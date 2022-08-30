import Button from "../components/Button";
import CustomerTable from "../components/CustomerTable";
import Layout from "../components/Layout";
import Customer from "../interfaces/Customer";

export default function Home() {
	const data = [
		{ id: 'psng0s9ef-nfans', name: 'João', age: 18 },
		{ id: 'ja-f9j-ajjlf3kd', name: 'Maria', age: 22 },
		{ id: '9ash9h-h39udhka', name: 'José', age: 30 },
	]

	const selectedCustomer = (customer: Customer) => {
		console.log(customer.name);
	}

	const removedCustomer = (customer: Customer) => {
		console.log(customer.name);
	}

	return (
		<div className={`
		flex h-screen justify-center items-center
		bg-gradient-to-r from-blue-500 to-purple-500
		text-white
	`}>
			<Layout title="Cadastro Simples">
				<div className="flex justify-end">
					<Button className="mb-4" color="green">Novo Cliente</Button>
				</div>
				<CustomerTable 
					customers={data} 
					selectedCustomer={selectedCustomer}
					removedCustomer={removedCustomer}
				/>
			</Layout>
		</div>
	)
}
