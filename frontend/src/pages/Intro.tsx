import { Container, Row, Col, Image } from "react-bootstrap"
import profilePicture from '../resources/nikPhoto.jpeg'
import basketballPhoto from '../resources/basketballPhoto.jpeg'
import basketballPhoto1 from '../resources/basketballPhoto1.jpeg'

const Intro: React.FC = () => {

    return (
        <Container className="mt-4">
            <Row className="align-items-center">
                <Col xs={6} md={5} className="text-center">
                    <Image src={profilePicture} alt="Nikolas Gustavson standing by a building" roundedCircle fluid className="profile-picture w-75" />
                </Col>
                <Col xs={6} md={7}>
                    <h2>Welcome to my website!</h2>
                    <p>
                    Hello there! My name is Nikolas Gustavson, and I am currently a student-athlete at the University of Texas at Tyler. I am pursuing a degree in Computer Science while competing at the NCAA Division 2 level. I aspire to become a Full Stack Engineer and am eagerly looking forward to breaking into the industry upon graduation.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={7}>
                    <h3>About me</h3>
                    <p>
                        I was born and raised in Helsinki, Finland, a country in Northern Europe. Growing up, I never imagined that I would end up in the United States, studying and playing basketball simultaneously. Yet, here I am. My life has always revolved around basketball, which ultimately led me to the US. Following in my brother's footsteps, I began my collegiate journey in Torrington, Wyoming, at Eastern Wyoming College, a junior college in a small town.
                    </p>
                    <p>
                        Despite the challenges, I embraced my time there, studying math, one of my favorite subjects. After earning my Associate's Degree, I realized my passion for Computer Science, having taken a few CS classes. This interest led me to the University of North Alabama, where I pursued a Computer Science degree. However, after a year, I transferred to the University of Texas at Tyler to continue my education and basketball career.
                    </p>
                    <p>
                        Despite some setbacks that delayed my graduation, I remained determined. I am now set to graduate with my Bachelor's degree next year and plan to pursue a Master's degree thereafter. Throughout my academic journey, I have primarily used Java and C++ for programming. Recently, I have developed a keen interest in React and Node.js, leveraging the Full Stack Open course from the University of Helsinki to learn these new technologies.
                    </p>
                    <p>
                        I am passionate about learning and eagerly embrace new technologies and frameworks. I am excited to apply my skills and learning habits in real-world projects and look forward to contributing to innovative solutions in the software engineering field.
                    </p>
                </Col>
                <Col xs={6} md={5}>
                    <Image src={basketballPhoto} alt="me dribbling a basketball" rounded fluid className="basketball-photo w-100"/>
                    <Image src={basketballPhoto1} alt="me shooting a basketball" rounded fluid className="basketball-photo w-100"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro