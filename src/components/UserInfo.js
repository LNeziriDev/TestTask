import React from 'react';
import Avatar from './Avatar';
const HeaderCard = (props) => {
    const settings = props.settings == undefined || null;
    const size = props.size == undefined || null ? 'small' : props.size; 
    const type = props.type == undefined || null ? 'horizontal' : props.type;   
      
    return (
        <div className={`user-info ${type} ${size}`}>
            <Avatar {...props}/>
            <div className="user-info-wrapper">
                <span className="head">{`${props.user.name} ${props.user.surname}`}</span>
                <span className="lead">{props.user.position}</span>              
            </div>
            {settings ?  null :
            <div className="card-settings">
                {props.settings}
            </div>
             }
        </div>
    );
};

export default HeaderCard;
 