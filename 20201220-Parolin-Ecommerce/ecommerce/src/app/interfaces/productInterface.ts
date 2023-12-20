import { categoryInterface } from "./categoryInterface";

export interface productInterface{
    id: number,
    title: string,
    price: number,
    description: string,
    category: categoryInterface,
    images: string[]
    
}

export interface CartProduct {
    product: productInterface,
    quantity: number
}