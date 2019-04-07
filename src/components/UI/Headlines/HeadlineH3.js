import React from 'react';

const HeadlineH3 = (props) => {
    return (
        <h3 title={props.title} className="h3">{ props.title.length > 50 ?
                	props.title +'...' : props.title}</h3>
    )
}

export default HeadlineH3