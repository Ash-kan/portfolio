import React from "react";
import {Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Contact extends React.Component {
  render() {
  //constants to save the information and contact information
  const getInTouchTitle = 'Get In Touch'
  const getInTouchDescription = 'Please use this form to contact me or find my contact details below'
  const contactForm = 'Contact Form'
    const contactInfo = [
      {icon: 'map-marker-alt', info: 'Toronto, Canada.', link: './'},
      {icon: 'envelope', info: 'ashkan.shokri@outlook.com', link: './'},
      {icon: 'phone', info: '+14168411575', link: './'},
      {icon: ['fab', 'linkedin'], info: 'Linked in', link: 'https://www.linkedin.com/in/ashkan-shokri-ab43a8107/'}
    ]
    return(
        <div className='tab-content-container'>
          <div className='page-content'>
            <Container>
              <Row>
                <Col>
                  <text style={{color: "#5682b1", fontSize: 40}}>CONTACT</text>
                </Col>
              </Row>
              <Row style={{paddingRight: 25}}>
                <Col>
                {/*get in touch title and description*/}
                  <Row>
                    <text style={{fontSize: 35, marginTop: 15}}>{getInTouchTitle}</text>
                  </Row>
                  <Row>
                    <text style={{fontSize: 20, textAlign: 'left'}}>{getInTouchDescription}</text>
                  </Row>
                  {/*rendering of the contact infor of the developer*/}
                  {contactInfo.map((item, index) => {
                    return (
                        <Row>
                          <a style={{marginTop: index ? 10 : 50, marginBottom: index === contactInfo.length -1 ? 30 : 10}} href={item.link}>
                            <FontAwesomeIcon size="2x" icon={item.icon} style={{width: 40}} />
                            <text style={{fontSize: 20, textAlign: 'center', alignSelf: 'center', marginLeft: 30}}>{item.info}</text>
                          </a>
                        </Row>
                    )
                  })}
                </Col>
                {/*rendering of the contact form*/}
                <Col>
                  <Row>
                    <text style={{fontSize: 35, marginTop: 15}}>{contactForm}</text>
                  </Row>
                  <form style={{marginLeft: 20, marginTop: 20}} >
                  <Row>
                    <input style={{width: '100%', height: 40, padding: 10}} type="text" name="name" placeholder={'Full Name'} />
                  </Row>
                  <Row>
                    <input style={{width: '100%', height: 40, padding: 10, marginTop: 10}} type="text" name="name" placeholder={'Email Address'} />
                  </Row>
                  <Row>
                    <textarea style={{width: '100%', height: 120, padding: 10, marginTop: 10}} type="text" name="name" placeholder={'Message for Me'} />
                  </Row>
                  <Row>
                    <input style={{width: 160, height: 40, marginTop: 20, backgroundColor: 'white', borderColor: '#5682b1'}} type="submit" value="Submit message" />
                  </Row>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    )
  }
}

export default Contact;