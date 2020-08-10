import React from "react";
import "../directory-items/section.styles.scss";
import Sections from "../../section-data";
import Menu from "../menu/menu-item";
export default function Section() {
  return (
    <div className="menu">
        {Sections.map(({id, ...otherSectionsProps}) => {
          return (
            <Menu
              key={id}
              {...otherSectionsProps}
            />
          );
        })}
      </div>
  );
}
