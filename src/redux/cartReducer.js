const initialState = {
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT_QUANTITY":
      console.log("increment quantity for product:", action.payload);
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
