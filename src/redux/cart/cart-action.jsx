import CartActionTypes from "./cart-types";
export const toggleCartDropdown = ()=>({
    type : CartActionTypes.TOGGLE_DROPDOWN,
});
const addItem = item =>({
    type : CartActionTypes.ADD_ITEM,
    payload : item,
});
export default addItem;
