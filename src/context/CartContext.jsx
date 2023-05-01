/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
// import cartReducer, { initialState } from "../reducer/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {



    const reducer = (state, action) => {
        switch (action.type) {
          case "ADD_TO_CART":
            const tempState = state.filter(
              (item) => action.payload.id === item.id
            );
            if (tempState.length > 0) {
              return state;
            } else {
              return [...state, action.payload];
            }
          case "INCREASE":
            const tempState1 = state.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
            return tempState1;
          case "DECREASE":
            const tempState2 = state.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            });
            return tempState2;
        case "REMOVE_FROM_CART":
            const tempState3 = state.filter(
              (item) => action.payload.id !== item.id
            );
            return tempState3;
        case "PLACE_ORDER":
            return []
          default:
            return state;
        }
    }
  const [state, dispatch] = useReducer(reducer, []);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
