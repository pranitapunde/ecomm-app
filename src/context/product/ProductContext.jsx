import { useReducer } from "react";
import { createContext } from "react";
import ProductReducer from "./PoductReducer";

const ProductContext = createContext()

export const ProductProvider = ({ children} ) =>{


    const initialState ={
        products : null,
        cartItems : [
            // {
            //     "id": 1,
            //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            //     "price": 109.95,
            //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            //     "category": "men's clothing",
            //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            //     "rating": {
            //     "rate": 3.9,
            //     "count": 120
            //     },
            //     },
        ],

        
    };

    const [state, dispatch] = useReducer(ProductReducer,initialState)

    return(
        <ProductContext.Provider value={{...state,dispatch}}>
            {children}

        </ProductContext.Provider>
    )

}

export default ProductContext