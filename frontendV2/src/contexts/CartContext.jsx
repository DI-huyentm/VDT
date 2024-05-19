import { createContext, useContext, useReducer } from "react";

// Create a context for the cart
const CartContext = createContext();

// Reducer function to handle state updates
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((_, index) => index !== action.index),
      };

    case "INCREASE_ITEM_AMOUNT":
      return {
        ...state,
        cartItems: state.cartItems?.map((item, index) =>
          index === action.index ? { ...item, amount: item.amount + 1 } : item
        ),
      };

    case "DECREASE_ITEM_AMOUNT":
      return {
        ...state,
        cartItems: state.cartItems.map((item, index) =>
          index === action.index
            ? {
                ...item,
                amount: item.amount > 1 ? item.amount - 1 : item.amount,
              }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

const initialState = {
  cartItems: [],
  totalValue: 0,
};

// CartProvider component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log("state", state.cartItems);

  // Value to be provided by this context
  const cartContextValue = {
    cartItems: state.cartItems,
    addItem: (item) => dispatch({ type: "ADD_ITEM", item }),
    removeItem: (index) => dispatch({ type: "REMOVE_ITEM", index }),
    increaseItemAmount: (index) =>
      dispatch({ type: "INCREASE_ITEM_AMOUNT", index }),
    decreaseItemAmount: (index) =>
      dispatch({ type: "DECREASE_ITEM_AMOUNT", index }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
