import { CartState, Item } from "../interfaces/interfaces";

type CartAction = 
    | { type: "addToCart", payload: Item }
    | { type: "removeFromCart", payload: { transactionID: string} };


export const cartReducer = ( state: CartState, action: CartAction ): CartState => {

    switch (action.type) {
        case "addToCart":
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        case "removeFromCart":
            return {
                ...state,
                items: state.items.filter(item => item.transactionID !== action.payload.transactionID)
            }
    
        default:
            return state;
    }
}