import React from 'react';
import ReactDOM from 'react-dom';
import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SidebarItems extends React.Component {
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
                {/*set the values sent throught sidebar.js*/}
                <NavLink    
                  className={classnames({ active: this.props.activeValue === {a} })}
                  onClick = {() =>{this.props.sidebarfunc(a);}}
                >
                  {/* create an icon in the sidebar through the property sent by sidebar.js*/}
                    <FontAwesomeIcon icon={this.props.icon} />
                  {/*chose the name of the options from the properties sent by sidebar.js*/}
                    <span className="menu-items">{this.props.item}</span>
                </NavLink>
            </NavItem>
      );
    }
  }

  export default SidebarItems;