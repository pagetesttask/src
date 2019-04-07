import React from 'react'
import HeadlineH2 from '../UI/Headlines/HeadlineH2'
import Description from '../UI/Description/Description'
import man from '../../resources/imgs/man-laptop-v1.svg'
import man2 from '../../resources/imgs/man-laptop-v2.svg'


const Requirements = ({ className }) => {
		return (
				<section id="requirements" className="requirements">
						<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-10 col-md-8">
									<HeadlineH2 title="General requirements for the test task"/>
							</div>
						</div>
							<div className="row">

							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
								<Description>Users want to find answers to their questions quickly and
														data shows that people really care about how quickly their
														pages load. The Search team announced speed would be a ranking
														signal for desktop searches in 2010 and as of this month (July 2018), 
														page speed will be a ranking factor for mobile searches too.
												</Description>
								<br/>
								<Description>
														If you're a developer working on a site, now is a good time 
														to evaluate your performance using our speed tools. Think about 
														how performance affects the user experience of your pages and 
														consider measuring a variety of real-world user-centric performance 
														metrics.
												</Description>
								<br/>
								<Description>
														Are you shipping too much JavaScript? Too many images? 
														Images and JavaScript are the most significant contributors to 
														the page weight that affect page load time based on data from HTTP 
														Archive and the Chrome User Experience Report - our public dataset 
														for key UX metrics as experienced by Chrome users under real-world 
														conditions.            
												</Description>
							</div>
							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 order-md-last order-first  d-flex justify-content-xl-center justify-content-lg-end justify-content-center">
								<picture>
                  
               <source srcSet={man} 
                  media="(min-width: 992px)"/>
                  <source srcSet={man2} 
                  media="(min-width: 768px)"/>
                    <img src={man} alt=""/>
                </picture>
							</div>
						</div>
					</div>
				</section>
		)
}

export default Requirements
