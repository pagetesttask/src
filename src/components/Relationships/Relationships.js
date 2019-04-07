import React from 'react'
import HeadlineH2 from '../UI/Headlines/HeadlineH2'
import List from '../UI/List/List'

const Relationships = ({ className }) => {
	return (
        <section id="relationships" className="relationships">
        	<div className="container">
        		<div className="row justify-content-center">
        			<div className="col-xl-6 col-md-9">
        			<HeadlineH2 
        			title="About my relationships with web-development"/>
        		</div>
        	</div>
	        	<List/>
            </div>
        </section>
    )
}

export default Relationships
