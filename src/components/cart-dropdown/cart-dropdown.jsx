import React from "react";
import CustomButton from "../custom-btn/custom-btn.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item";
import {selectCartItems} from "../../redux/cart/cart-selector";
import {connect} from "react-redux";
const CartDropdown = ({cartItems})=>{
   return( 
   <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem=>{
               return <CartItem 
                  key={cartItem.id}
                  item={cartItem}
               />
            })}
        </div>
        <CustomButton 
        buttonName="CHECKOUT"
        isCart="true"
        />
    </div>
   )
}
const mapStateToProps = state=>({
   cartItems : selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown);