import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project1.png";
import projImg1 from "../assets/img/project3.png";
import projImg3 from "../assets/img/project2.png";
import projImg4 from "../assets/img/project4.png";
import projImg8 from "../assets/img/project8.png";
import projImg7 from "../assets/img/project7.png";
import projImg6 from "../assets/img/project6.png";
import projImg5 from "../assets/img/project5.png";
import projImg9 from "../assets/img/project9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Foodys",
      description: "Food Delivery Website created using MERN stack",
      imgUrl: projImg8,
    },
    {
      title: "Sushi landing page",
      description: "Created using HTML, CSS, JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Face Regnition",
      description: "Detects faces on the screen",
      imgUrl: projImg3,
    },
    {
      title: "Obscene Content Blocker",
      description: "Blocks Obscene Content",
      imgUrl: projImg9,
    },
    {
      title: "Keeper App",
      description: "Created using React.js",
      imgUrl: projImg7,
    },
    {
      title: "Peronal Portfolio",
      description: "Portfolio using HTML and CSS",
      imgUrl: projImg1,
    },
   
  ];
  const projects1 = [
   
    {
      title: "Simon Game",
      description: "Simple simon game using javaScript",
      imgUrl: projImg4,
    },
    {
      title: "To Do",
      description: "Created using Node.js",
      imgUrl: projImg6,
    },
    {
      title: "Drum Kit",
      description: "Created using javaScript",
      imgUrl: projImg5,
    },
  ];
  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={4}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some the project I have created during my journey in Web Development</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">


                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
