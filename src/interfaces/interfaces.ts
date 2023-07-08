export interface Item {
    transactionID: string,
    id: number,
    title: string,
}

export interface CartState {
    items: Item[]
}

export interface props {
    item: Item
}