import React from "react";
import './icon_button.css';

function IconButton(props) {
    return (
        <div className="icon-button">
            <img src={props.icon} alt={props.alt} />
        </div>
    );
}

export default IconButton;