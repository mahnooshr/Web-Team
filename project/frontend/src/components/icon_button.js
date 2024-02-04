import React from "react";
import '../styles/icon_button.css';

function IconButton(props) {
    return (
        <div className="icon-button" onClick={props.onClick}>
            <img src={props.icon} alt={props.alt} />
        </div>
    );
}

export default IconButton;