import { Data } from "@angular/router"

export interface Product {
	name: { type: String, require: true },
	 productId:string
	category?:string
	description:string
	price: number
	images?:string
	createdAt?:Data
 updatedAt?:Data

}
