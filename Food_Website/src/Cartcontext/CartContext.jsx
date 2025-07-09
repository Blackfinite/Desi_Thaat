import React, {  createContext, useCallback, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext();


const cartReducer = (state,action)=>{
    switch (action.type) {
        case 'ADD_Item':{
            const {item,quantity} = action.payload;
            const existingItem = state.find(i=> i.id ===item.id);
            if(existingItem){
                return state.map(i=>i.id===item.id ? {...i,quantity}:i)
            }
            return [...state,{...item,quantity}];
           
        }
        case 'Remove_Items':{
            return state.filter(i=>i.id !== action.payload.itemId);

        }
        case 'UPDATE_Q':{
            const {itemId,newQuantity} = action.payload;
            return state.map(i=> i.id === itemId ? {...i,quantity: Math.max(1,newQuantity) } : i)
        }
        default: return state;
    } 
}
const initializer = ()=>{
    if(typeof window !== 'undefined'){
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    }
    return []
}
export const CartProvider = ({children}) =>{
    const [cartItems,dispatch] = useReducer(cartReducer,[],initializer);

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cartItems));
    },[cartItems]);

    const cartTotal = cartItems.reduce((total,item) => total + item.price  * item.quantity,0);
    const totalItemsCount = cartItems.reduce((sum,item)=> sum + item.quantity,0);

    const formatTotalItems = (num)=>{
        if(num>=1000){
            return(num / 1000).toFixed(1)+'K';
        }
        return num;
    }
    const addToCart = useCallback((item,quantity)=>{
        dispatch({type:'ADD_Item',payload:{item,quantity}})
    },[])

    const removeFromCart = useCallback((itemId)=>{
        dispatch({type:'Remove_Items',payload:{itemId}})



    },[])

    const UpdateQ = useCallback((itemId,newQuantity)=>{
        dispatch({type:'UPDATE_Q',payload:{itemId,newQuantity}})

    })
    return(
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            UpdateQ,
            cartTotal,
            totalItems:formatTotalItems(totalItemsCount)

        }}>

            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=> useContext(CartContext)

