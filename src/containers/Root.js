
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink 
} from 'react-router-dom';
import axios from 'axios';

/*Anatomy Components*/
import Header from '../anatomy/Header';
import Sidebar from '../anatomy/Sidebar';
import Content from '../anatomy/Content';
/*Other Components */
import UserInfo from '../components/UserInfo';
/*Import Some DATA Components */
import {author} from '../server/data';

 
class Root extends Component{
    constructor(props){
        super(props);
        this.state = {
          activeTabContent:'About',
          userNavRightActive:false,
          smallCards:true,
        }
        this.showAbout = this.showAbout.bind(this);
        this.showProjects = this.showProjects.bind(this);
        this.showModal = this.showModal.bind(this);
        this.viewModalNav = this.viewModalNav.bind(this);
        this.toggleCards = this.toggleCards.bind(this);
    }
    showAbout(e){
      e.preventDefault();
      this.setState({
        activeTabContent : 'About'
      })
    }
    showProjects(e){
      e.preventDefault();
       this.setState({
        activeTabContent : 'Projects'
      })
    }
    showModal(e){
      e.preventDefault();
       this.setState({
        activeTabContent : 'Modal'
      })
    }
    viewModalNav(e){
      e.preventDefault();
      this.setState(prevState => ({userNavRightActive:!prevState.userNavRightActive}));
    }
    toggleCards(e){
      e.preventDefault();
      this.setState(toggleCards => ({smallCards:!toggleCards.smallCards}));
    }
    render(){
        return( 
            <section className="full-page">
                <Header user={author[1]} viewModalNav={this.viewModalNav}/>
                <section className="page-body">
                    <Sidebar  
                      showAbout={this.showAbout}
                      showProjects={this.showProjects}
                      showModal={this.showModal}                      
                    />
                    <Content user={author[0]} cover={this.state.smallCards} activeTab={this.state.activeTabContent}/>
                </section>


                {this.state.userNavRightActive ?
                <section className="modal">
                  <div className="modal-content right">
                    <a href='#' onClick={this.viewModalNav}><i className="material-icons">arrow_forward</i></a>
                    <UserInfo user={author[1]} type='vertical' size='big'/>
                    <div className="full-width">
                        <ul className="vertical-menu">
                            <li><a href="#" onClick={this.toggleCards}><i className="material-icons">dashboard</i><span>Toggle Cards</span></a></li>
                            <li><a href="#"><i className="material-icons">link</i><span>Another Link</span></a></li>
                            <li><a href="#"><i className="material-icons">link</i><span>Another Link</span></a></li>
                            <li><a href="#"><i className="material-icons">link</i><span>Another Link</span></a></li>
                        </ul>
                    </div>
                  </div>
                </section> : null
                }
            </section> 
        );
    }
}

export default Root;



