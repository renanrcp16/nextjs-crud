import Customer from "./Customer";

export default interface CustomerRepository {
	saveCustomer(customer: Customer): Promise<Customer>
	getAllCustomer?: () => Promise<Customer>
	deleteCustomer(customer: Customer): Promise<void>
}