import React, {Component} from 'react';
import Card from './Card';
import Cover from './Cover';
import UserInfo from './UserInfo';

/*Some Data from server */
import {author} from '../server/data';
class Section extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
         const coverClass = this.props.cover ? 'with-cover' : null;
        return (
            <div className={`section`}>
                    <div className={`section-wrapper ${coverClass}`}>
                        <Cover user={this.props.user}/>
                        <UserInfo user={this.props.user} type='horizontal' size='big' settings={this.props.settings} />
                        <div className="section-content">
                            {this.props.sectionContent}
                        </div>
                    </div>  
                </div>
        );
    }
}

export default Section;
 