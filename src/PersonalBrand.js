import React from 'react';
import { Col, Container, Row } from "reactstrap";
import heroImage from "./ashloogoo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactQuotesCarousel from 'react-quotes-carousel'


class Brand extends React.Component {

  render() {

    //info details to render on the tab
    const info = [
      // { title: 'Age', value: '24' },
      { title: 'Residence', value: 'Toronto' },
      { title: 'Phone', value: '+14168411575' },
      // { title: 'Freelance', value: '@asdasda' }
    ]
// social links and icons to display on the tab
    const socialLink = [
      { name: ['fab', 'twitter'], link: 'https://twitter.com/Ashkan_Shokri89' },
      { name: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/ashkan-shokri-ab43a8107/'},
      { name: ['fab', 'behance'], link: 'https://www.behance.net/ashkanshokdd4c' },
    ]



    return (
      //outer container to position the inner container
      <div className="tab-content-container">
        <div className="brand-content">
          {/*inner container that contains the content*/}

          <div style={{ background: "#fff", borderColor: "#233661", borderWidth: 3, borderStyle: "solid" }} className="brand-main-content">
            <Container>
              <Row>
                <Col sm={{ size: 10, offset: 1 }}>
                  <Row>
                  <Col lg='6'>
                      <Row>
                      <h2 className="name-decoration" style={{ fontSize: 50, padding: 30, color: "#5682b1" }}>Ashkan Shokri</h2>
                        {/*Profile image of the developer*/}  
                        <figure style={{ paddingTop: 30 }}>
                          <img id="hero-image" src={heroImage} />
                        </figure>
                      </Row>
                      <Row>
                        <blockquote>
                          <text>"Without continual growth and progress, such words as improvement, achievement and success have no meaning" - Benjamin Franklin</text>
                        </blockquote>
                      </Row>
                      <Row>
                        {/*rendering social links*/}
                        {socialLink.map(item => {
                          console.log({ item })
                          return (
                            <Col>
                              <a href={item.link}>
                                <FontAwesomeIcon style={{ marginTop: 20, marginBottom: 20 }} size="2x" icon={item.name} />
                              </a>
                            </Col>
                          )
                        })}
                      </Row>
                    </Col>
                    {/*Information about the developer*/}
                    <Col lg='6'>
                      <div style={{ marginBottom: 60 }}>
                        <h3 style={{ marginTop: 50, fontSize: 25, padding: 30, color: "#5682b1" }}>"Constant Growth and Learning."</h3>
                        <p style={{ fontSize: 23, lineHeight: 1.3 }}>
                          A Software Engineer with multi-national working experience in data center infrastructure
                          management, IT department management, infrastructure design and software development.
                          A strong team player with excellent initiative solution-oriented mindset and research skills with an
                          ability to communicate complex and sensitive information in an understandable form.
                          </p>
                      </div>
                      {/*rendering general info about the developer*/}
                      <div className="hero-info">
                        <h2>General Info</h2>
                        <ul style={{ listStyle: 'none' }}>
                          {
                            info.map(item => {
                              return (
                                <li style={{ fontSize: 24 }}>
                                  <span>{item.title + ": "}</span>
                                  {item.value}
                                </li>
                              )
                            })
                          }

                        </ul>
                      </div>
                      {/* <Row>
                        <ReactQuotesCarousel delay='2000' animationDuration='1000' className='quotes'
                        quotes = {[{author: "Alex", company: 'xyzCompany', image: heroImage, quote: 'He is skilled software developer with excellent team work'},
                          {author: "Benjamin", company: 'abcCompany', image: heroImage, quote: 'He is skilled software developer with excellent team work'},
                        ]}/>
                        
                      </Row> */}
                    </Col>
                  </Row>
                  
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

    )
  }
}

export default Brand;