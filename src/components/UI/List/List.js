import React from 'react';
import HeadlineH3 from '../../UI/Headlines/HeadlineH3'
import Description from '../../UI/Description/Description'

const List = props => {
		return (
		<ul className="list">
			<div className="row ">
			
				<div className="col-xl-4 col-lg-4 col-md-11 
				offset-xl-0 offset-lg-0 offset-md-1 col-sm-12">

					<li className="list__item">
						<div className="row ">
							<div className="col-xl-12 col-lg-12 col-md-2 ">
								<span className="icon icon-html">
									<span className="path1"></span>
									<span className="path2"></span>
									<span className="path3"></span>
									<span className="path4"></span>
								</span>
							</div>
							<div className="col-md-9 col-lg-12">
								<HeadlineH3 title="I'm in love with HTML"/>
						<Description>
							Hypertext Markup Language (HTML) is the standard 
							markup language for creating web pages and web applications.
						</Description>
							</div>
						</div>
					</li>

				</div>

				<div className="col-xl-4 col-lg-4 col-md-11
				 offset-xl-0 offset-lg-0 offset-md-1 col-sm-12">
					<li className="list__item">
						<div className="row ">
							<div className="col-xl-12 col-lg-12 col-md-2  ">
								<span className="icon icon-css">
	                <span className="path1"></span>
	                <span className="path2"></span>
	                <span className="path3"></span>
	                <span className="path4"></span>
                </span>
							</div>
							<div className="col-md-9 col-lg-12">
								<HeadlineH3 title="CSS is my best friend"/>
						<Description>
							Cascading Style Sheets (CSS) is a  style sheet language
							used for describing the presentation of a document written in 
							a markup language like HTML.
						</Description>
							</div>
						</div>
					</li>
				</div>

				<div className="col-xl-4 col-lg-4 col-md-11 
				offset-xl-0 offset-lg-0 offset-md-1 col-sm-12">
					<li className="list__item">
						<div className="row ">
							<div className="col-xl-12 col-lg-12 col-md-2 ">
								<span className="icon icon-javascript">
								<span className="path1"></span><span className="path2"></span><span className="path3"></span>
								</span>
							</div>
							<div className="col-md-9 col-lg-12">
								<HeadlineH3 title="JavaScript is my passion"/>
						<Description>
							JavaScript is a high-level, interpreted programming 
							language. It is a language which is also characterized as dynamic,
							weakly typed, prototype-based and multi-paradigm.
						</Description>
							</div>
						</div>
					</li>
				</div>

				</div>
				</ul>
		)
}

export default List
