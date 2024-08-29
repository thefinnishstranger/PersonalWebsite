import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { Typography } from '@mui/material';
import childhoodPhoto from '/childhoodBasketball.png';
import childhoodPhoto2 from '/childhoodPhoto2.png';
import familyPhoto from '/familyPhoto.jpeg';
import familyPhoto2 from '/andrePhoto.jpg';
import familyPhoto3 from '/familyPhoto3.png'
import mukiPhoto from '/mukiPhoto.jpeg';
import highschoolPhoto2 from '/highschoolPhoto2.png'
import highschoolPhoto3 from '/highschoolPhoto3.png'
import collegePhoto from '/collegePhoto.jpeg';
import collegePhoto2 from '/collegePhoto2.png';
import collegePhoto3 from '/collegePhoto3.png';
import '../main.css';

const Basketball: React.FC = () => {
    return (
        <Container id='basketball'>
            <Row className="mt-5">
            <Typography variant='h4' align='center' gutterBottom>
                Basketball
            </Typography>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={6} className="p-4">
                    <Card className="basketball-card">
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Card.Img src={familyPhoto} alt="basketball photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={familyPhoto2} alt="basketball photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={familyPhoto3} alt="basketball photo" />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>
                                <h4>Family</h4>
                            </Card.Title>
                            <Card.Text>
                                My family's history revolves around basketball; it has always been a cornerstone of our household culture. My mother has been deeply involved in basketball her entire life, either playing or coaching, and she played on the Azerbaijan national team. Both of my brothers, Andre and Dimi, have also dedicated their lives to basketball, with both playing professionally. In 2024, Andre embarked on his professional career, adding another chapter to our family's rich basketball legacy. The sport has been more than a game for us; it’s a tradition, a shared passion, and a binding force that has shaped our lives.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={6} className="p-4">
                    <Card className="basketball-card">
                    <Carousel interval={null}>
                            <Carousel.Item>
                                <Card.Img src={childhoodPhoto} alt="basketball photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={childhoodPhoto2} alt="basketball photo" />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>
                                <h4>Childhood</h4>
                            </Card.Title>
                            <Card.Text>
                                From the day I was born, basketball has been a constant companion. As a child, I always had a basketball in hand, and it quickly became my greatest passion. Growing up, I never imagined that I would have the opportunity to play at such a high level. Those early years were filled with countless hours on the court, honing my skills and developing a deep love for the game. Basketball was not just a hobby; it was the foundation of my identity and the driving force behind my dreams.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={6} className="p-4">
                    <Card className="basketball-card">
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Card.Img src={highschoolPhoto2} alt="basketball photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={mukiPhoto} alt="basketball photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={highschoolPhoto3} alt="basketball photo" />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>
                                <h4>High School</h4>
                            </Card.Title>
                            <Card.Text>
                                My high school years were some of the most formative of my basketball career. It was during this time that I grew significantly as a player, learning new aspects of the game and refining my skills. Inspired by my brother, who earned a scholarship to play for Richmond University, I set my sights on securing a scholarship as well. The journey was challenging, but I was determined to succeed. My hard work paid off when I received my first scholarship offer to a junior college in Wyoming. Though it was an adventure into the unknown, I embraced the opportunity with optimism and excitement.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={6} className="p-4">
                    <Card className="basketball-card">
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <Card.Img src={collegePhoto} alt="basketball photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={collegePhoto3} alt="basketball photo" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src={collegePhoto2} alt="basketball photo" />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>
                                <h4>Collegiate Career</h4>
                            </Card.Title>
                            <Card.Text>
                                My collegiate basketball journey began at Eastern Wyoming College, where I played for two years at the NJCAA Division 1 level. Despite being in a remote location, my time there was incredibly rewarding, filled with unforgettable moments and experiences. After junior college, I achieved my dream of playing NCAA Division 1 basketball by accepting a scholarship to the University of North Alabama. There, I had the privilege of traveling across the United States, competing in top-tier facilities, and facing off against some of the best players in the country. Although my time at North Alabama was cut short due to basketball circumstances, I found a new home at the University of Texas at Tyler. Over the past year, I've enjoyed high-quality basketball and education, preparing me for the future. As I enter my final year of collegiate basketball in 2024, I'm determined to make the most of every moment, cherishing the opportunities and challenges that lie ahead.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Basketball;
