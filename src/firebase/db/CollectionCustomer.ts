import firebase from "../config"
import Customer from "../../interfaces/Customer"
import CustomerRepository from "../../interfaces/CustomerRepository"

async function saveCustomer(customer: Customer): Promise<any> { /*corrigir*/
		if (customer?.id) {
			await collection().doc(customer.id).set(customer)
			return customer
		} else {
			const docRef = await collection().add(customer)
			const doc = await docRef.get()
			return doc.data()
		}
	}

	async function getAllCustomer(): Promise<any[]> { /*corrigir*/
		const query = await collection().get()
		return query.docs.map(doc => doc.data()) ?? []
	}

	async function deleteCustomer(customer: Customer): Promise<void> {
		return await collection().doc(customer.id).delete()
	}

	function collection() {
		return firebase.firestore().collection('customers')
	}

export default function CollectionCustomer():CustomerRepository {
	// const conversor = {
	// 	toFirestore(customer: Customer) {
	// 		return {
	// 			name: customer.name,
	// 			age: customer.age
	// 		}
	// 	},
	// 	fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
	// 		const data = snapshot.data(options)
	// 		return {
	// 			id: snapshot.id,
	// 			name: data.name,
	// 			age: data.age
	// 		}
	// 	}
	// }
	return saveCustomer()
	
}