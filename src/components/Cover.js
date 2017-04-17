import React from 'react';

const Cover = (props) => {
    const cover = props.user.coverUrl == undefined ? `${require('../img/coverPlaceholder.png')}` : props.user.coverUrl;
    return(
        <div className="cover">
            <img src={cover} alt="" />
        </div> 
    );
};

export default Cover;
