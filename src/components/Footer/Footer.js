import React from 'react';
import Logo from '../UI/Logo/Logo';
import Menu from '../Menu/Menu';

const Footer = ({ className }) => {
		return (
		<footer className="footer">
			
				<div className="container">
					<div className="footer-top">
						<Logo/>
						<Menu/>
						</div>
				</div>
			

		<div className="footer-bottom">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
						<div className="contact">
							<div className="contact__item contact__email">
								<span className="contact__icon icon-mail"></span>work.of.future@gmail.com</div>
							<div className="contact__item contact__tel">
								<span className="contact__icon icon-phone"></span>+38 (050) 789 24 98</div>
							<div className="contact__item contact__tel">
								<span className="contact__icon icon-cellphone"></span>+38 (095) 556 08 45</div>
						</div>
					</div>

					<div className="col-2 ">
						<div className="footer-part">
							<a href="/" className="footer-part__link">News</a>
							<a href="/" className="footer-part__link">Blog</a>
							<a href="/" className="footer-part__link">Partners</a>
							<a href="/" className="footer-part__link">Shop</a>
						</div>
					</div>

					<div className="col-2 ">
						<div className="footer-part">
							<a href="/" className="footer-part__link">Overview</a>
							<a href="/" className="footer-part__link">Design</a>
							<a href="/" className="footer-part__link">Code</a>
							<a href="/" className="footer-part__link">Collaborate</a>
						</div>
					</div>

					<div className="col-2">
						<div className="footer-part">
							<a href="/" className="footer-part__link">Tutorials</a>
							<a href="/" className="footer-part__link">Resources</a>
							<a href="/" className="footer-part__link">Guides</a>
							<a href="/" className="footer-part__link">Examples</a>
						</div>
					</div>

					<div className="col-2  ">
						<div className="footer-part">
							<a href="/" className="footer-part__link">FAQ</a>
							<a href="/" className="footer-part__link">Terms</a>
							<a href="/" className="footer-part__link">Conditions</a>
							<a href="/" className="footer-part__link">Help</a>
						</div>
					</div>

				</div> 
			</div>
			<div className="container">
				<div className="footer-more">
					<p className="copyring">&#169; abz.agency specially for the test task</p>
					<ul className="social ">
						<li className="social__item">
							<a href="/" className="social__link social__fb">
								<span className="ic icon-facebook"></span>
							</a>
						</li>
						<li className="social__item">
							<a href="/" className="social__link social__lin">
								<span className="ic icon-linkedin"></span>
							</a>
						</li>
						<li className="social__item">
							<a href="/" className="social__link social__ins">
								<span className="ic icon-instagram"></span>
							</a>
						</li>
						<li className="social__item">
							<a href="/" className="social__link social__tw">
								<span className="ic icon-twitter"></span>
							</a>
						</li>
						<li className="social__item">
							<a href="/" className="social__link social__pin">
								<span className="ic icon-pinterest"></span>
							</a>
						</li>
					</ul>
			</div>
		</div>
		</div>
</footer>
		);
};



export default Footer;
