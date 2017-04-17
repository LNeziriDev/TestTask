import React from 'react';
import Avatar from '../components/Avatar';
const Header = (props) => {
    return (
        <section className="section header">
           <span className='lead'>LOGO</span> 
            <span className='row-flex-nowrap' style={{cursor: 'pointer'}} href="#" onClick={props.viewModalNav}>
               <span className='lead' style={{marginRight: '20px'}}>User Name </span>
               <Avatar {...props}/>
            </span>
        </section>
    );
};

export default Header;