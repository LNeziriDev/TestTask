import React, {Component} from 'react';

class DropDown extends Component {
    constructor(){
        super();
        this.state = {
            active:false
        }
        this.toggleDD = this.toggleDD.bind(this);
    }
    toggleDD(e){
        e.preventDefault;
        this.setState((prevDDstate)=>(
            {active:!prevDDstate.active}
        ))
    }

    render() {
        const ddState = this.state.active ? 'collapsed' : '';
        return (
             <div className={`drop-down-wrapper ${ddState}`}>
                <div className="drop-down-trigger">
                    <a href="#" onClick={this.toggleDD}>{this.props.action}</a>
                </div>
                <div className="drop-down-content">
                    <ul>
                        {this.props.settings}
                    </ul>
                </div>
        </div>
        );
    }
}

export default DropDown;