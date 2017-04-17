import React from 'react';

import DropDown from './DropDown';
import Cover from './Cover';
import UserInfo from './UserInfo';


 const Card = ( {...props} ) => {
    const coverClass = props.cover ? 'with-cover' : '';
    return(

        <div className={`card ${coverClass}`}>
            {props.cover ?
                <Cover user={props.user}/>: null
            }
            
            <UserInfo user={props.user} type={props.type} size={props.size} settings={props.settings}/>
            
            <div className="card-content">
                {props.content}
            </div>
        </div>
    );
}


export default Card;