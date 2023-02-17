import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems :[],
        totalCartItems:0,
        showCart:false
    },
    reducers:{
        addCart:(state,action)=>{
            let newItem = action.payload
            let exciting = state.cartItems.find(e=>{
                return e.id == newItem.id
            })
            if(exciting){
                exciting.quantity++
                exciting.totalPrice += newItem.price
            }else{
                state.cartItems.push({
                    name:newItem.name,
                    price:newItem.price,
                    id:newItem.id,
                    quantity:1,
                    totalPrice:newItem.price
                })
             state.totalCartItems++
            }
        },
        removeCart:(state,action)=>{
            let newItem = action.payload
            let exciting = state.cartItems.find(e=>{
                return e.id == newItem.id
            })
            if(exciting.quantity == 1){
                state.cartItems = state.cartItems.filter(e=>{
                    return e.id !== newItem.id
                })

                state.totalCartItems--

                
            }else{
                exciting.quantity--
                exciting.totalPrice -= newItem.price
            }
        },

        showCartList:(state)=>{
            state.showCart = !state.showCart
        }        
    }
})

export default CartSlice.reducer
export const {addCart,removeCart,showCartList} = CartSlice.actions