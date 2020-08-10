import React from "react";
import "./preview-item.styles.scss";
import CustomButton from "../custom-btn/custom-btn.component";
import addItem from "../../redux/cart/cart-action";
import {connect} from "react-redux";

function CollectionItem({item,addItem}){
    const {imageUrl,name,price} = item;
    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage : `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}$</span>
            </div>
            <CustomButton 
            buttonName="Add to Cart"
            inverted
            onClick={()=>addItem(item)}
            />
        </div>
    );
}
const mapDispatchToProps = dispatch=>({
    addItem : item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);