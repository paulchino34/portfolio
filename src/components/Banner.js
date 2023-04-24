import { Col, Container, Row } from "react-bootstrap"
import picture from '../assets/img/Paul.jpg'
import { ArrowRightCircle } from "react-bootstrap-icons"

const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Paul Jara`}</h1>
                        <p>As a full stack developer, I have experience in both backend and front end development. My primary focus has been on backend development using Java and Spring. Throughout my career, I have leveraged my expertise in Java to design and develop robust, scalable, and secure applications that meet the needs of both end-users and stakeholders.</p>
                        <p>In addition to my backend skills, I am also comfortable with front end development, including HTML, CSS, and JavaScript, as well as front-end frameworks like React, JSF and JSP. I recognize the importance of having a strong understanding of both backend and front end development in order to create cohesive and effective applications.</p>
                        <p>Furthermore, my ability to work collaboratively with cross-functional teams and my commitment to staying up-to-date with the latest trends and best practices in software development have contributed to my success in delivering high-quality products that exceed expectations.</p>
                        <p>Overall, I am proud of my accomplishments as a software developer and look forward to continuing to tackle new challenges in the field, while expanding my knowledge and skills in both backend and front end development.</p>
                        <a href="#connect"><button>Let's connect<ArrowRightCircle size={25} /></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={picture} alt="Paul Jara" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner