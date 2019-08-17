import React from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavbarToggler, DropdownToggle } from 'reactstrap';
import SidebarItems from "./SidebarItems";
import DropDownItems from "./DropDownItems"
import logo from './logo-new.svg'
import { faHome, faBriefcase, faImage, faCopy, faQuestion, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        //using the function for collapsing and showing the menu on smaller screen
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
      //function for changing the state to show or hide the menu on smaller screen
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

    render() {
        return (
            <div>
                <nav id="sidebar">
                    <div className="sidebar-header" >
                        <img src={logo} />
                    </div>
                    {/*sidebar navigation to select the content to be shown on the tab*/}
                    <Nav Navbar tabs className="components">
                        {/*Creating different options to select on large screen*/}
                        <SidebarItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Home" icon={faHome} />
                        <SidebarItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="About" icon={faBriefcase} />
                        <SidebarItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Projects" icon={faCopy} />
                        <SidebarItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Resume" icon={faImage} />
                        <SidebarItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Brand" icon={faQuestion} />
                        <SidebarItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Contact" icon={faPaperPlane} />
                    </Nav>
                </nav>
                <nav id="dropdown-menu">
                    <Nav style={{width: '100vw'}}  tabs className="components">
                        {/*sidebar for smaller screens*/}
                        <NavbarToggler style={{width: '100vw', marginRight: 0}} onClick={this.toggleNavbar}>
                            <FontAwesomeIcon style={{width: 30, height: 30}} icon={'bars'} />
                        </NavbarToggler>
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                                {/*Creating different options to select on smaller screen*/}
                                <DropDownItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Home" icon={faHome} />
                                <DropDownItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="About" icon={faBriefcase} />
                                <DropDownItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Projects" icon={faCopy} />
                                <DropDownItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Resume" icon={faImage} />
                                <DropDownItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Brand" icon={faQuestion} />
                                <DropDownItems activeValue={this.props.activeValue} sidebarfunc={this.props.sidebarfunc} item="Contact" icon={faPaperPlane} />
                            </Nav>
                        </Collapse>
                    </Nav>
                </nav>
            </div >
        )
    }
}

export default Sidebar;