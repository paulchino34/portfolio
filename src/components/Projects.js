import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard"
import pailon from '../assets/img/pailon.png'
import restaurant from "../assets/img/restaurant.png"
import yourTree from "../assets/img/yourTree.png"
import register from "../assets/img/register.png"
import pokemon from "../assets/img/pokemon.png"

export const Projects = () => {

    const projects = [
        {
            title: "Pailón ardiente",
            description: "Sex shop",
            url: 'https://effervescent-quokka-157dc1.netlify.app',
            gitUrls: ['Front,https://github.com/Paul-Jara/pailon-ardiente-fe', 'Back,https://github.com/paulchino34/pailon-ardiente'],
            image: pailon
        },
        {
            title: "Pailón quiteño",
            description: "Restaurant application",
            url: 'https://zesty-paletas-1f142d.netlify.app/',
            gitUrls: ['All,https://github.com/Paul-Jara/restaurant-app'],
            image: restaurant
        },
        {
            title: "Your Tree",
            description: "Family tree",
            url: 'https://paulchino34.github.io/primer-proyecto/land-page.html',
            gitUrls: ['All,https://github.com/paulchino34/paulchino34.github.io'],
            image: yourTree
        },
        {
            title: "Register",
            description: "People register",
            url: 'https://paulchino34.github.io/second-project/index.html',
            gitUrls: ['All,https://github.com/paulchino34/paulchino34.github.io'],
            image: register
        },
        {
            title: "Pokemon size",
            description: "Chart of pokemon size",
            url: 'https://paulchino34.github.io/third-project/index.html',
            gitUrls: ['All,https://github.com/paulchino34/paulchino34.github.io'],
            image: pokemon
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Projects and Clients</h2>
                            <p></p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Projects</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Collaborations</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
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
                                    <Tab.Pane eventKey="section">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
