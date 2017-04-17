import React, {Component} from 'react';
class Sidebar extends Component {
   
    render() {
        return (
            <aside className="sidebar">
                 <ul className="vertical-menu">
                    <li><a href="#" onClick={this.props.showAbout}><i className="material-icons">dashboard</i><span>About</span></a></li>
                    <li><a href="#" onClick={this.props.showProjects}><i className="material-icons">assignment</i><span>Projects</span></a></li>
                    <li><a href="#" onClick={this.props.showModal}><i className="material-icons">link</i><span>Another Link</span></a></li>
                    <li><a href="#" onClick={this.props.showModal}><i className="material-icons">link</i><span>Another Link</span></a></li>
                    
                </ul>
            </aside>
        );
    }
}

export default Sidebar;