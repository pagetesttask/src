import React from 'react'

const Menu = props => {
    return (
        <ul className="nav-menu">
            <li onClick={props.onClick} className="nav-menu__item">
        		<a href="#about" className="nav-menu__link">About me</a>
        	</li>
        	<li onClick={props.onClick} className="nav-menu__item">
        		<a href="#relationships" className="nav-menu__link">Relationships</a>
        	</li>
        	<li onClick={props.onClick} className="nav-menu__item">
        		<a href="#requirements" className="nav-menu__link">Requirements</a>
        	</li>
        	<li onClick={props.onClick} className="nav-menu__item">
        		<a href="#users" className="nav-menu__link">Users</a>
        	</li>
        	<li onClick={props.onClick} className="nav-menu__item">
        		<a href="#sign-up" className="nav-menu__link">Sign Up</a>
        	</li>
        </ul>
    )
}


export default Menu;
