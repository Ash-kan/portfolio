import React from 'react';
import {Col, Container, Row} from "reactstrap";
import logo from "./profile.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Resume extends React.Component {
  render() {
    //different information to use and render in the tab
    const education = [
      {year: '2019', title: 'Web Design and Development', subtitle: 'Humber College', description: 'One year program about latest web design and development methods.'},
      {year: '2015', title: 'Bachelor of Science in Software Engineering (BSc Hons)', subtitle: 'Staffordshire University & APIIT.', description: 'A dual degree program offered by Staffordshire university.'},
      {year: '2013', title: 'Bachelor of Science in Software Engineering (BSc)', subtitle: 'Azad University', description: 'Four year degree program.'},
      {year: '2007', title: 'Certified Internet Web Professional (CIW)', subtitle: 'MFT', description: 'One year program about latest web design and development methods.'}

    ]
    const experience = [
      {year: 'Jan 2016 - Present', title: 'Systems Administrator – Remote SSH/RDP/Video Conf', subtitle: 'Atlastim Co.', description: '•	Design and development of company website; providing web hosting and email service using private infrastructure on the cloud using CentOS and OpenSUSE as operating systems.'},
      {year: 'Feb 2013 - Mar 2018', title: 'Manager, IT', subtitle: 'Brighton Petroleum Consultants Sdn Bhd.', description: '•	Design and development of multiple company websites and maintenance, management and implementation of in-house data-center and infrastructure; providing a fast and secure platform for storing and transmitting the company’s data assets using military-grade encryption through the web, VPN, SAN/NAS, and emails while authenticating users using Microsoft AD.'},
          ]
    //Education and experience is saved into a new constant with titles.
    const columns = [
      { title: 'Education', data: education },
      { title: 'Experience', data: experience },
    ]
    const languages = [
      'HTML5/CSS3', 'Javascript', 'NodeJS', 'Python', ''
    ]
    return(
        //outer container to position the inner container
        <div className='tab-content-container'>
          {/*inner container that contains the content*/}  
          <div className='page-content'>
            <Container>
              <Row>
                <Col>
                  <text style={{color: "#345595", fontSize: 40}}>RESUME</text>
                </Col>
              </Row>
              <Row>
                {/*rendering of different information about the developer*/}
                {columns.map(column => {
                  return (
                      <Col>
                        <Row>
                          <text style={{marginBottom: 25, fontSize: 35, marginLeft: -25}}>{column.title}</text>
                        </Row>
                        {column.data.map((item, index) => {
                          return (
                              <div style={{marginTop: index ? 40 : 15}}>
                                <Row noGutters={true}>
                                  <div style={{backgroundColor: '#5682b1', color: 'black', paddingLeft: 10, paddingRight: 10, marginLeft: -10}}>
                                  <text>{item.year}</text>
                                  </div>
                                </Row>
                                <Row  noGutters={true}>
                                  <text style={{fontSize: 25}}>{item.title}</text>
                                </Row>
                                <Row  noGutters={true}>
                                  <text style={{color: '#5682b1'}}>{item.subtitle}</text>
                                </Row>
                                <Row  noGutters={true}>
                                  <text>{item.description}</text>
                                </Row>
                              </div>
                          )
                        })}
                      </Col>
                  )
                })}
              </Row>
              {/*information regarding the languages joined by adding a comma in between*/}
              <Row>
                <text style={{fontSize: 35, marginLeft: -25, marginTop: 25, textAlign: 'center', alignSelf: 'center'}}>Languages: </text>
              </Row>
              <Row>
                <text style={{fontSize: 20, marginBottom: 15, textAlign: 'center', alignSelf: 'center'}}>{languages.join(', ')}</text>
              </Row>
            </Container>
          </div>
        </div>
    )
  }
}

export default Resume;