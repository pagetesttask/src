import React from 'react';

const HeadlineH2 = (props) => {
    return (
        <h2 title={props.title} className="h2">{ props.title.length > 50 ?
                	props.title +'...' : props.title}</h2>
    )
}


export default HeadlineH2
