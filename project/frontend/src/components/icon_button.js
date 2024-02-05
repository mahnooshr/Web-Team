import React from "react";
import '../styles/icon_button.css';

function IconButton(props) {
    return (
        <div className={props.className + 'icon-button'} onClick={props.onClick}>
            <img src={props.icon} alt={props.alt} width={50} height={50} />
        </div>
    );
}

export default IconButton;