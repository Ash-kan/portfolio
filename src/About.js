import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import profilePicture from "./profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

//Imported images to showcase skills
const images = {
  advertising: require('./advetising_icon.png'),
  creativity: require('./database_server-512.png'),
  photography: require('./private-cloud-1024x1024.png'),
  webDesign: require('./web_design_icon.png')
}


class About extends React.Component {
  render() {
    const name = 'Ashkan Shokri'
    
    //About me descriptions
    const descriptions = [
      'A Software Engineer with multi-national working experience in data center infrastructure management, IT department management, network infrastructure design and software development. A strong team player with excellent initiative solution-oriented mindset and research skills with an ability to communicate complex and sensitive information in an understandable form.',
      'I am looking forward to obtaining a position where I can effectively maximize my technical, leadership and interpersonal skills thereby making a significant contribution to a firm that offers a genuine opportunity for career growth.',
      // 'Para 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reprehenderit repellendus nisi, itaque sequi id laboriosam, neque possimus tempora error in dolor odit ad sit voluptatibus illum accusamus fugiat doloremque.'
    ]

    //Contact and general information
    const info = [      
      { title: 'Residence', value: 'Toronto' },
      { title: 'e-mail', value: 'ashkan.shokri@outlook.com' },
      { title: 'Phone', value: '+14168411575' },
      { title: 'Skype', value: 'ashkan.shokry' }
    ]

    //Social links 
    const socialLink = [
      { name: ['fab', 'twitter'], link: 'https://twitter.com/Ashkan_Shokri89' },
      // { name: ['fab', 'facebook-f'], link: 'https://www.facebook.com' },
      // { name: ['fab', 'youtube'], link: 'https://www.youtube.com' },
      // { name: ['fab', 'instagram'], link: 'https://www.instagram.com' },
      { name: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/ashkan-shokri-ab43a8107/' },
    ]

    
    //A list of services provided
    const services = [
      // {
      //   title: 'Advertising', image: images.advertising, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumdod tempor.\n' +
      //     '\n'
      // },
      {
        title: 'IT Management', image: images.creativity, description: 'Design, implementation and maintanance of local IT operations.\n' +
          '\n'
      },
      {
        title: 'Cloud', image: images.photography, description: 'Design, implementation and maintanance of cloud solutions.\n' +
          '\n'
      },
      {
        title: 'Web Design', image: images.webDesign, description: 'Full-stack web development.\n' +
          '\n'
      }
    ]


    return (
      //outer container to position the inner container
      <div className='tab-content-container'>
      {/*inner container that contains the content*/}  
        <div className='page-content'>

          <Container>
            <Row>
              <Col>
                <text style={{color: "#5682b1", fontSize: 40 }}>ABOUT ME</text>
              </Col>
            </Row>
            <Row>
              {/*profile picture for the About me page.*/}
              <Col className="justify-content-md-center" md='12' xl="3">
                <img className="about-img" src={profilePicture} />
              </Col>
              {/*Introductory details*/}
              <Col style={{borderLeftColor: 'grey', borderLeftStyle: 'solid', borderLeftWidth: 2}} xs="12" sm="12" md='12' xl='5'>
                <Row>
                  <Col md='12' >
                    <text style={{ textAlign: 'left', marginLeft: 20, fontSize: 35, fontWeight: 600 }}>{name}</text>
                  </Col>
                </Row>
                <Row>
                  {/*Rendering of About me description*/}
                  <Col xs="12" sm="12" md='12' style={{ textAlign: "left", marginLeft: 30, marginRight: 15, paddingLeft: 30}}>
                  {
                    descriptions.map(item => {
                      return (    
                          <Row>
                            <Col sm='11'>
                            <text style={{ marginBottom: 10, fontSize: 20, fontWeight: 300 }}>
                              {item}
                            </text>
                            </Col>
                          </Row>
                            
                      )
                    })
                  }
                  </Col>
                </Row>
              </Col>
              {/*rendering contact and genenral information*/}
              <Col xs='12' sm="12" md='12' xl="3">
                {
                  info.map(item => {
                    return (
                      <Row>
                        <Col md='12' style={{ textAlign: 'left', paddingLeft: 20, fontSize: 18, borderLeftColor: 'grey', borderLeftStyle: 'solid', borderLeftWidth: 2}}>  
                          <text>
                            <text style={{ textDecorationLine: 'underline' }}>
                              {item.title}:
                                  </text>
                            {' ' + item.value}
                          </text>
                        </Col>
                      </Row>
                    )
                  })
                }
                <Row>
                  {/*rendering social links*/}
                  {socialLink.map(item => {
                    console.log({ item })
                    return (
                        <a href={item.link}>
                          <FontAwesomeIcon style={{marginLeft: 26, marginTop: 20, marginBottom: 20 }} size="2x" icon={item.name} />
                        </a>
                    )
                  })}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <text style={{ fontSize: 35, marginTop: 20, marginBottom: 10 }}>Services:</text>
              </Col>
            </Row>
            <Row>
              {/*Rendering of services*/}
              {services.map(item => {
                return (
                  <Col xs="12" sm="12" md='12' lg={12/services.length}>
                    <Row><Col className="justify-content-sm-center"><img src={item.image} /></Col></Row>
                    <Row><Col className="justify-content-sm-center"><text style={{ textAlign: 'center', fontSize: 30, marginLeft: 5, marginRight: 5, fontWeight: 400 }}>{item.title}</text></Col></Row>
                    <Row><Col className="justify-content-sm-center"><text style={{ paddingRight: 5, textAlignn: 'center', marginBottom: 20, fontSize: 20, marginLeft: 5, marginRight: 5, fontWeight: 300 }}>{item.description}</text></Col></Row>
                  </Col>
                )
              })}

            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default About;