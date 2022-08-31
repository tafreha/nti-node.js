import { Data } from "@angular/router"

export interface User {
    _id?:string
    userName:string
    email:string
    password:string
    address?:string
    
    tokens?: [{
_id:string
        token: string
    }]
 createdAt?:Data
 updatedAt?:Data

}

