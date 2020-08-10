import React from "react";
import "./header.styles.scss";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase";
import {connect} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user-selector";
import Cart from "../../components/cart/cart";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
function Header({ currentUser,toggleCart }) {
  const active = {
    opacity: "0.7",
  };
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="nav">
        <NavLink activeStyle={active} className="link" to="/shop">
          <li>SHOP</li>
        </NavLink>
        <NavLink activeStyle={active} className="link" to="/contact">
          <li>CONTACT</li>
        </NavLink>
        {currentUser ? 
          <div className="link">
            <li onClick={() => auth.signOut()} className="link">Sign Out</li>
          </div>
        : 
          <NavLink activeStyle={active} className="link" to="/sign-in">
            <li>SIGN IN</li>
          </NavLink>
        }
        <Cart />
      </ul>
      {toggleCart?"":<CartDropdown />}
    </div>
  );
}
const mapStateToProps = state =>({
  currentUser : selectCurrentUser(state),
  toggleCart : state.cart.hidden
});

export default connect(mapStateToProps)(Header);