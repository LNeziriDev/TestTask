import React, {Component} from 'react'; 
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Section from '../components/Section';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';
import DropDown from '../components/DropDown';
/*Import Some DATA Components */
import {author} from '../server/data';
   const RowWithLabel = (props) => {
            return(
                <div className="row-with-label">
                    <span className='sub-lead'>{props.labelName}</span>
                    <span className='lead'>{props.labelValue}</span>
                </div>  
            );
        }
class Content extends Component {
    render() {
        const socialNetwork = ['FB','LN','G+','TW','RE'];
        const DropDownChild = socialNetwork.map((i)=>
            <li key={i}><a href="#" >{i}</a></li>
        )
        const thirdColumnAkaSettings = <DropDown action={<i className="material-icons">more_vert</i>} settings={DropDownChild}/>

        const projects = <div className={`row-3`}>

            <Card user={author[0]}  cover={this.props.cover} settings={thirdColumnAkaSettings}/>
            <Card user={author[1]}  cover={this.props.cover} settings={thirdColumnAkaSettings}/>
            <Card user={author[0]}  cover={this.props.cover} settings={thirdColumnAkaSettings}/>
            <Card user={author[1]}  cover={this.props.cover} settings={thirdColumnAkaSettings}/>

            {/*<Card user={author[1]} type='vertical' size='big' cover={true}  settings={thirdColumnAkaSettings}/>*/}
        </div>
        const about = <div className='full-wdth'>
            <RowWithLabel labelName='Name' labelValue='John Ndoe' />
            <RowWithLabel labelName='Gender' labelValue='Mr' />
            <RowWithLabel labelName='Job' labelValue={author[0].position} />            
            <RowWithLabel labelName='Email' labelValue={author[0].email} />
            <RowWithLabel labelName='Phone' labelValue={author[0].phone} />
            <RowWithLabel labelName='Adress' labelValue={author[0].adress} />
        </div>
     
        
        const tabs = () => { 
            if(this.props.activeTab == 'Projects'){
                return(
                    projects
                );
            }else if(this.props.activeTab == 'About'){
                return(
                    about
                );
            }else{
                return(
                    <h1>Modal</h1>
                );
            }
        }
    
        return (
            <section className="content">
                 <Section 
                        user={this.props.user} 
                        settings={thirdColumnAkaSettings}
                        sectionContent={tabs()}
                        cover={this.props.smallCards}
                    />
            </section>
        );
    }
}

export default Content