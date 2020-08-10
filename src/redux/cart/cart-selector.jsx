import {createSelector} from "reselect";

const cartSelector = state =>state.cart;

export const selectCartItems = createSelector(
    cartSelector,
    cart=>cart.cartItems,
);
export const selectCartItemCount = createSelector(
    selectCartItems,
    cartItems =>cartItems.reduce((accumalated,cartItem)=>accumalated+cartItem.quantity,0)
);
