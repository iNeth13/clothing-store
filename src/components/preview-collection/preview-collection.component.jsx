import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../preview-item/preview-item.component";
export default function Collection({ title, items }) {
  return (
    <div className="collection-preview">
      <h3 className="title">{title}</h3>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
