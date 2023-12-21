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

export interface FilterList {
    title?: string,
    price?: number,
    price_min?: number,
    price_max?: number,
    categoryId?: number
}