import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import java from '../assets/img/java.jpg'
import cicd from '../assets/img/ci_cd.avif'
import spring from '../assets/img/spring.png'
import quarkus from '../assets/img/quarkus.jpg'
import react from '../assets/img/react.jpeg'
import rest from '../assets/img/rest.png'
import boomi from '../assets/img/boomi.jpg'
import node_express from '../assets/img/node_express.png'
import aws from '../assets/img/aws.png'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Las habilidades mas reelevantes</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={java} alt='skill-img'></img>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={spring} alt='skill-img'></img>
                                <h5>Spring</h5>
                            </div>
                            <div className="item">
                                <img src={quarkus} alt='skill-img'></img>
                                <h5>Quarkus</h5>
                            </div>
                            <div className="item">
                                <img src={boomi} alt='skill-img'></img>
                                <h5>Boomi</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt='skill-img'></img>
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={node_express} alt='skill-img'></img>
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={rest} alt='skill-img'></img>
                                <h5>RESTful</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt='skill-img'></img>
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={cicd} alt='skill-img'></img>
                                <h5>CI/CD</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills