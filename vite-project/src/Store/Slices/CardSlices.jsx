import { createSlice } from "@reduxjs/toolkit";
import ContentData from "../../ContentData/ContentData";

 const CardSlices = createSlice({
   name : "Ecommerce",
   initialState : {
     card :[],
     items : ContentData,  //now we see this data first in ProductCard.jsx file first then i do functionality
     totalQunently : 0,
     totalPrice : 0
   },
   reducers : {
    AddToCard : (state,action)=>{
         let find = state.card.findIndex((e)=>{
            return e.id === action.payload.id
         })
         console.log("find",find)
          if(find >=0){
          
            state.card[find].quantity +=1 
          }else{
            state.card.push(action.payload)
          }
    },
    getCardTotal : (state) =>{
        let {totalQunently,totalPrice} =  state.card.reduce((cartTotal,cartItem)=>{
      
            console.log("cartTotal",cartTotal)
            console.log("cartItem",cartItem)
            const {price,quantity} = cartItem 
            console.log("price",price) 
            console.log("quantity",quantity)
            const itemTotal = price * quantity;
            cartTotal.totalPrice  += itemTotal
            // console.log("cartTotal",cartTotal)
            cartTotal.totalQunently += quantity;
            return cartTotal
        },
        {
           totalPrice: 0,
           totalQunently :0
        }
        );
        state.totalPrice = parseInt(totalPrice).toFixed(2);
        state.totalQunently = totalQunently

    },
    RemoveItem : (state,action) =>{
         state.card = state.card.filter((item)=>item.id !== action.payload)
        console.log("action.payload",action.payload)
         
    },
    IncreaseItemQuantity :(state,action) =>{
        state.card = state.card.map((item) =>{
          if(item.id === action.payload){
            return {...item , quantity : item.quantity+1}
          }
           return item
        })
    },
    DecreaseItemQuantity : (state,action) =>{
        state.card = state.card.map((item) =>{
            if(item.id === action.payload){
              return {...item , quantity : item.quantity-1}
            }
             return item
          })
    }
  
   }
})
export default CardSlices.reducer
export const {AddToCard, getCardTotal ,RemoveItem ,IncreaseItemQuantity,DecreaseItemQuantity} = CardSlices.actions