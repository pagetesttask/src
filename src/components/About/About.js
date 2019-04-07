import React from 'react'
import Description from '../UI/Description/Description'
import Button from '../UI/Button/Button'
import HeadlineH2 from '../UI/Headlines/HeadlineH2'
import HeadlineH3 from '../UI/Headlines/HeadlineH3'
import man from '../../resources/imgs/man-mobile.svg'

const About = ({ className }) => {
	return (
		<section id="about" className="about">
			<div className="container">
				<div className="row justify-content-center">
				<HeadlineH2 
					 title="Let's get ac quainted"/>
				</div>
			
				<div className="row justify-content-sm-center">
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
						<img src={man} alt="man"/>
					</div>
					<div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
						<HeadlineH3 
							title="I am cool frontend developer"/>
					<Description>
						When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.      
					</Description>
						
					<br/>
					<Description>
						Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.      
					</Description>
						
					<Button className="btn-link">
					<a href="#sign-up" style={{color: 'inherit'}}>Sign Up</a></Button>
					</div>
				</div>
			</div>
		</section>
	)
}


export default About
