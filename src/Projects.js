import React from 'react';
import { Col, Container, Row } from 'reactstrap';
//import images to use in the file
const images = {
  projectExample: require('./projects.jpg'),
  projectExample2: require('./projectImage.webp'),
  projectExample3: require('./movies.png'),
  projectExample4: require('./Taskapp.jpg'),
  projectExample5: require('./Airbnb.jpg'),

}

class Projects extends React.Component {

  render() {
    //information about the projects
    const projects = [
      { image: images.projectExample3, title: "Latest Movies", projectUrl: 'https://github.com/Ash-kan/current_movies.git', linkText: 'View Project on GitHub', details: ['a front-end only project.', 'This project is a demonstration of latest front-end technologies.'] },
      { image: images.projectExample4, title: "Task Management App", projectUrl: 'https://github.com/Ash-kan/composite_2_task_man.git', linkText: 'View Project on GitHub', details: ['a front-end only project.', 'This project is a demonstration of the use of local storage.'] },
      { image: images.projectExample5, title: "AirBNB", projectUrl: 'https://github.com/ash-nina-sunmi/Air-b-n-b.git', linkText: 'View Project on GitHub', details: ['a full-stack app.', 'Using nodeJS and MongoDB'] }      
    ]

    return (
      //outer contianer to position the inner container
      <div className="tab-content-container">
        {/*inner contianer containing the content*/}
        <div className='page-content'>
          <Container>
            <Row>
              <Col>
                <text style={{ color: "#5682b1", fontSize: 40, marginBottom: 50 }}>Projects</text>
              </Col>
            </Row>
            <Row>
                {/*rendering of information about different projects*/}
                {projects.map(project => {
                  return (
                    <Row style={{ marginBottom: 30 }}>
                      <Col>
                        <Row style={{ flex: 1, justifyContent: 'center' }}>
                          <text style={{ fontSize: 30, marginBottom: 5, color: "#345595" }}>{project.title}</text>
                        </Row>
                        <Row className="correct-image-behavior">
                          <Col sm='12' lg='8'>
                            <a href={project.projectUrl}>
                              <img style={{width: 600, height: "100%"}} className='img-fluid' src={project.image} />
                            </a>
                          </Col>
                          <Col>
                            {project.details.map(item => {
                              return (
                                <Row style={{ textAlign: 'left' }}>
                                  <Col xs='12' sm='12'>
                                    <text style={{ fontSize: 20, color: "#000" }}>{item}</text>
                                  </Col>
                                </Row>
                              )
                            })}
                            <Row>
                              <Col xs='12'>
                                <a href={project.projectUrl}>
                                  <text style={{ fontSize: 25, marginTop: 5, color: '#345595', textDecorationLine: 'underline' }}>{project.linkText}</text>
                                </a>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  )
                }
                )}
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Projects;