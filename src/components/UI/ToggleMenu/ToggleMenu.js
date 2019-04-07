import React from 'react';

const ToggleMenu = (props) => {

    return (
        <button
        	className="toggle-menu"
        	onClick={props.onToggle}
        >
        	<span className="icon-line-menu"></span>
        </button>
    );
};


export default ToggleMenu;
