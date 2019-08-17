import React from 'react';
import {tabs, TabContent, TabPane, Nav, NavItem, NavLink, Navbar} from 'reactstrap';
import classnames from 'classnames';
import Content from "./Content.js"
import Sidebar from "./Sidebar.js"


class Main extends React.Component{
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    //choose the default content tab
    this.state = {
      activeTab: "Home"
    };
  }
  //check if the tab open is the one selected and if not change the tab
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }

    return tab;
  }

  render(){
    return(
      <div className="wrapper">
        {/*Sidebar file of the page containing all the options and passing the toggle function as a prop to select the tab*/}
        <Sidebar activeValue={this.state.activeTab} sidebarfunc={this.toggle}  />
        {/*Main content of the page containing details and passing a prop function to select the content that is required*/}
        <Content contentselect={this.state.activeTab}/>
      </div>
    )
  }
}

export default Main;