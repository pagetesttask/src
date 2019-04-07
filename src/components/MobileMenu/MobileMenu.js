import React from 'react';
import User from '../Header/User/User';
import Menu from '../Menu/Menu';
import Backdrop from '../UI/Backdrop/Backdrop';

const MobileMenu = (props) => {
	const cls = ['mobile-menu'];
	 if(!props.isOpen) {
    	cls.push('close')
    }
    return (
    	<>
    	<div className={cls.join(' ')}
    		onClose={props.onClose}
    		>
	        <User/>
	        <Menu 
	         onClick={props.onClose}/>
	        <button className="log-out">Sign Out</button>
        </div>
        {props.isOpen ? <Backdrop onClick={props.onClose}/> : null}
        </>
    );
};



export default MobileMenu;
