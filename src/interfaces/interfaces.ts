export interface Item {
    id: number,
    title: string,
}

export interface CartState {
    cartCount: number,
    items: Item[]
}

export interface props {
    item: Item
}