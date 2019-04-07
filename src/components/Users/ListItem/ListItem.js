import React from 'react';

const ListItem = ({photo, name, email, phone, position}) => {
    return ( <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
      	<div className="users-list__item">
            <img src={photo} className="users__avatar" alt={name}/>
          	<div className="users-info">
          		<h3 className="h3 users__name">{name}</h3>
					<p className="users__specialty">{position}</p>
					<p className="users__email">{email}</p>
					<p className="users__phone">{phone}</p>
          	</div>
      	</div>
      </div>
	)
}


export default ListItem;
