import React from 'react';
import {TabContent, TabPane } from 'reactstrap';
import { fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import PersonalBrand from "./PersonalBrand";
import Contact from "./Contact.js";
import Resume from "./Resume.js"

const styles = {
  fadeInRight: {
      animation: 'x 0.5s',
      animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  }
}

class Content extends React.Component{
  
    render() {
  
  
        return(
            //content of the page
            //All the different tabs are imported and used in this file.
            //Each tab is given a id that is used by a function sent through property to choose the tab on clicking in the sidebar
            <div id="content">  
              <TabContent activeTab={this.props.contentselect}>
                <TabPane tabId="Home">
                {/* StyleRoot is used for slide animation*/}
                <StyleRoot>
                    <div style={styles.fadeInRight}> 
                      <Home/>
                    </div>
                </StyleRoot>
                </TabPane>
                <TabPane tabId="About">
                <StyleRoot>
                    <div style={styles.fadeInRight}> 
                      <About/>
                    </div>
                </StyleRoot>
                </TabPane>
                <TabPane tabId="Projects">
                <StyleRoot>
                    <div style={styles.fadeInRight}> 
                      <Projects/>
                    </div>
                </StyleRoot>            
                </TabPane>
                <TabPane tabId="Resume">
                <StyleRoot>
                    <div style={styles.fadeInRight}> 
                      <Resume />
                    </div>
                </StyleRoot>            
                </TabPane>
                <TabPane tabId="Brand">
                <StyleRoot>
                    <div style={styles.fadeInRight}> 
                      <PersonalBrand />
                    </div>
                </StyleRoot>
                </TabPane>
                <TabPane tabId="Contact">
                <StyleRoot>
                    <div style={styles.fadeInRight}> 
                      <Contact/>
                    </div>
                </StyleRoot>
                </TabPane>
              </TabContent>
            </div>    
        );
    }
  }

  export default Content;
  