import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";
import {connect} from "react-redux";
import {toggleCartDropdown} from "../../redux/cart/cart-action";
import {selectCartItemCount} from "../../redux/cart/cart-selector";

const Cart = ({toggleCartDropdown,itemCount})=>{
    return(
        <div className="cart-icon" onClick={toggleCartDropdown}>
            <CartLogo className="shopping-icon" />
            <span className="item-count">
                {itemCount}
            </span>
        </div>
    )
}
const mapToDispatchProps = dispatch =>({
    toggleCartDropdown : ()=>dispatch(toggleCartDropdown())
})
const mapStateToProps = state =>({
    itemCount : selectCartItemCount(state)
})
export default connect(mapStateToProps, mapToDispatchProps)(Cart);