export interface Item {
    transactionID: string,
    id: number,
    title: string,
    price: number
}

export interface CartState {
    items: Item[]
}

export interface props {
    item: Item
}

export interface ProductType {
    id: number,
    title: string,
    price: number, 
    category: string,
    description: string,
    image: string;
}
