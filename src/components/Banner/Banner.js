import React from 'react'
import Button from '../UI/Button/Button'
import Description from '../UI/Description/Description'


const Banner = props => {
    return (
        <section className="banner">
        <div className="container">
        <div className="row justify-content-md-start justify-content-sm-center">
            <div className="col-xl-6 col-lg-6 col-md-7 no-gutters col-sm-12">
            	
         <h1 className="h1">
            		Test assignment for
            		 Frontend Developer 
            		 position
            	</h1>
                <Description className="desc--white ">
                    We kindly remind you that your test assignment should 
be submitted as a link to github/bitbucket repository.<span className="large-text"> 
Please be patient, we consider and respond to every application that meets minimum
 requirements. We look forward to your submission. Good luck!</span>
                </Description>
            <Button  className="btn-primary ">
                <a href="#sign-up" style={{color: 'inherit'}}>Sign Up</a>
            </Button>
            </div>
            </div>
        	
        	</div>
        </section>
    )
}

export default Banner
