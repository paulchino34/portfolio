import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const ProjectCard = ({ title, description, url, gitUrls, image }) => {

    const handleConnectClick = (dir) => {
        window.location.href = dir;
    }

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={image} alt='project' />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br />
                    <button onClick={() => handleConnectClick(url)}>Visit site<ArrowRightCircle size={25} /></button>
                    {
                        gitUrls.map((gitUrl, index) => {
                            const dataUrl = gitUrl.split(',')
                            return (
                                <>
                                    <br />
                                    <button onClick={() => handleConnectClick(dataUrl[1])}>{`View code ${dataUrl[0]}`}<ArrowRightCircle size={25} key={`button_${index}`} /></button>
                                </>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard
