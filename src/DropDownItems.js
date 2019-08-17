import React from 'react';
import ReactDOM from 'react-dom';
import { NavItem, NavLink, DropdownItem } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DropDownItems extends React.Component {
    constructor(props){
        super(props)
//choose the active tab on ths start of the web app
        this.state = {
            activeTab: 'Home',
        };

    }
    render(){
        //save the property sent by sidebar.js
        var a = this.props.item;
        return(
            <NavItem>
                {/*set the values sent throught sidebar.js as a property*/}
                <NavLink
                    className={classnames({ active: this.props.activeValue === {a} })}
                    onClick = {() =>{this.props.sidebarfunc(a);}}
                    style={{width: "100vw", justifyContent: 'flex-start', textAlign: 'left'}}
                >
                    {/* create an icon in the sidebar through the property sent by sidebar.js*/}
                    <FontAwesomeIcon style={{width: 20, marginLeft: 10, marginRight: 15}} icon={this.props.icon} />
                    {/*chose the name of the options from the properties sent by sidebar.js*/}
                    <span style={{fontSize: 20}}>{this.props.item}</span>
                </NavLink>
            </NavItem>
        );
    }
}

export default DropDownItems;