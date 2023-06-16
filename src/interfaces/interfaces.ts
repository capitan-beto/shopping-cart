// Hecho para seguir el tutorial, ver si podemos reemplazar por
//el tipo declarado en items.ts

export interface Item {
    id: number,
    title: string,
}

export interface CartState {
    cartCount: number,
    items: Item[]
}