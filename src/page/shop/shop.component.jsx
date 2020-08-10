import React from "react";
import SHOP_DATA from "./shop-data";
import Collection from "../../components/preview-collection/preview-collection.component";
import "./shop.styles.scss";
export default function Shop(){


    return(
        <div className="collection-container">
            <h2>Collection</h2>
           {SHOP_DATA.map(({id,...otherProps})=>{
              return  <Collection 
                    id = {id}
                    {...otherProps}
                />
           })}
        </div>
    );
}