import React from 'react';
import HeadlineH2 from '../../UI/Headlines/HeadlineH2'
import Description from '../../UI/Description/Description'
// import Backdrop from '../../UI/Backdrop/Backdrop';
import Button from '../../UI/Button/Button'

const PopUp = (props) => {
    return (
        <div className="back">
    	<div className="container">
    	<div className="row justify-content-center">
        <div className='popup'>
        	<HeadlineH2 title='Congratulations'/>
        	<Description>You have successfully passed <br/> the registration</Description>
        	<Button onClick={props.onClosePopUp} className='btn-link'>ok</Button>
        </div>
        </div>
      </div>
      </div>
      
    );
};



export default PopUp;
