import React from 'react';

const Avatar = (props) => {
    const size = props.size == undefined || null ? 'small' : props.size;   
    return (
        <div className={`avatar round shadow ${size}`}>
            <a href="#" className="avatar-img">
                <img src={props.user.avatarUrl} alt="img" draggable="false"/>
            </a>
        </div>
    );
};

export default Avatar;

 