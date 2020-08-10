import React from "react";
import {withRouter} from "react-router-dom";
import "../menu/menu-item.styles.scss";
function Menu({ title, imageUrl, size , history , match , linkUrl }) {
  return (
    <div className={`${size} section`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
export default withRouter(Menu);