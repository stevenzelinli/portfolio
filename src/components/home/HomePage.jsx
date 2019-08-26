import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Button, Col, Container, Form, Jumbotron, Row, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import '../../styles/_home.scss';

const HomePage = () => (
    <div className="home-content">
        <Jumbotron className="intro">
            <div>
                <h1 id="part1">Welcome to my website.</h1>
                <span>
                    <h1 id="part2">I am a</h1>
                    <h1 id="part3">Full Stack Developer</h1>
                    <h1 id="part4">Database Admin</h1>
                    <h1 id="part5">Devops Engineer</h1>
                </span>
            </div>
        </Jumbotron>
        <Jumbotron className="anchors">
            <div>
                <p id="descr1">
                    Hello my name is Steven Li, I am a Software Engineering student in my final year attending
                    the University of Western Ontario. I have experience developing enterprise backend solutions
                    ranging from REST and SOAP APIs to Batch ETLs and working with various databases. In addition to
                    my experience developing backend, I have created and developed complex front end projects which integrate with
                    3rd party vendors and our own backend which we worked alongside.
                </p>
                <p id="descr2">
                    I am a good communicator that has no problem conversing with clients and am able to understand and
                    convey complex business logic and ideas. I work well in teams and am used to actively communicating
                    problems and solutions in collaboration with other team members. Clean and reusable is my mantra
                    when developing
                    <i> (and when I am buying products!) </i>
                    so you can expect organized and readable code that is efficient and meets requirements.
                </p>
            </div>
        </Jumbotron>
        <Jumbotron className="anchors" id="skills">
            <h1>Skills</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h4>Java</h4>
                        <div className="skill-container">
                            <div className="skills java">5 Years</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Spring Framework</h4>
                        <div className="skill-container">
                            <div className="skills spring">4 Years</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Docker + Kubernetes</h4>
                        <div className="skill-container">
                            <div className="skills docker">2.5 Years</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>ReactJS</h4>
                        <div className="skill-container">
                            <div className="skills react">2.5 Years</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Google Analytics</h4>
                        <div className="skill-container">
                            <div className="skills google">1 Year</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>CSS + HTML5</h4>
                        <div className="skill-container">
                            <div className="skills css">3 Years</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Gitlab CI</h4>
                        <div className="skill-container">
                            <div className="skills gci">2 Years</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>SQL</h4>
                        <div className="skill-container">
                            <div className="skills sql">2.5 Years</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Jenkins</h4>
                        <div className="skill-container">
                            <div className="skills jenkins">1 Year</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Python</h4>
                        <div className="skill-container">
                            <div className="skills python">1 Year</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <Jumbotron className="anchors cards" id="experience">
            <h1>Experience</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div id="autodata">
                            <div className="card-top">
                                <h3>Software Developer</h3>
                                <h4>Autodata Solutions</h4>
                                <h4>May 2018 - August 2019</h4>
                            </div>
                            <p>
                                * Worked on new features and modifications to existing code for multiple Spring based web services
                                dealing with car manufacturer data and resolved production bugs and inquiries around those services
                            </p>
                            <p>
                                * Created Docker containers to use in order to deploy to production a cluster of
                                <a href="https://lucene.apache.org/solr/"> Apache Solr </a>
                                servers setup with CDCR and automatic load balancing
                            </p>
                            <p>
                                * Planned and developed an internal service application used by our department to manage
                                resourcing needs using ReactJS and Spring Boot and additionally setup CI/CD on said application
                                which included automatic test pipelines, container creation, and deployment to a kubernetes cluster
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div id="mircom">
                            <div className="card-top">
                                <h3>Building Automation Technologist</h3>
                                <h4>Mircom</h4>
                                <h4>June 2015 - August 2017</h4>
                            </div>
                            <p>
                                * Setup and maintained HVAC Building Automation Systems (BAS) for many locations in the GTA
                                including several schools and malls such as Fairview Mall and Brampton's Bramalea City Centre
                            </p>
                            <p>
                                * Debugged and wrote code in C and custom vendor code for BAS systems which involved
                                temperature control and chronological jobs
                            </p>
                            <p>
                                * Visited many sites which required me to go and verify whether a system was setup
                                properly or not by checking code and physically going to sensors and fans to double check
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <Jumbotron className="anchors cards" id="projects">
            <h1>Projects</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div id="project">
                            <div className="card-top">
                                <span>
                                    <h3>KIA Compare</h3>
                                <a href="https://compare.autodatadirect.com/kia/ca/vehicle/#/select/primary/compare">
                                    <FontAwesomeIcon icon={faShareSquare} color="rgba(17, 19, 17, 0.76)" size="lg" />
                                </a>
                                </span>
                                <h4>ReactJS * Google Analytics * Java * Spring</h4>
                            </div>
                            <p>
                                While working at Autodata, I maintained and worked on new features for an embeddable UI widget which processes vehicle
                                VINs and compares them with common competitor vehicles in order to show vendor specific advantages and differences.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div id="project">
                            <div className="card-top">
                                <h3>Marcotte Physiotherapy</h3>
                                <h4>EmberJS * NodeJS * Express * Semantic UI</h4>
                            </div>
                            <p>
                                Designed and developed a website for a physiotherapist based in London, ON that would facilitate appointment booking,
                                payment processing, and exercise videos.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <div id="project">
                            <div className="card-top">
                                <span>
                                    <h3>Linkhub</h3>
                                    <a href="https://github.com/stevenzelinli/linkhub">
                                        <FontAwesomeIcon icon={faShareSquare} color="rgba(17, 19, 17, 0.76)" size="lg" />
                                    </a>
                                </span>
                                <h4>Java * Swing</h4>
                            </div>
                            <p>
                                Created a desktop messaging application that allowed for online chat rooms that would self destruct after the last
                                person leaves the chat leaving no trace of the conversation.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div id="project">
                            <div className="card-top">
                                <span>
                                    <h3>Portfolio Website</h3>
                                    <a href="https://github.com/stevenzelinli/portfolio">
                                        <FontAwesomeIcon icon={faShareSquare} color="rgba(17, 19, 17, 0.76)" size="lg" />
                                    </a>
                                </span>
                                <h4>HTML * CSS * ReactJS</h4>
                            </div>
                            <p>
                                Designed and created a website that would showcase my projects and demonstrate my ability in the front-end.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <Jumbotron className="anchors" id="contact">
            <h1>Contact</h1>
            <p><i>I will respond within 24h</i></p>
            <Form action="https://formspree.io/steven.zelin.li@gmail.com" method="POST">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="_replyto" />
                                <Form.Text className="text-muted">
                                    I will never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Button variant="warning" type="submit">
                    Notify Me
                </Button>
            </Form>
        </Jumbotron>
    </div>
);

export default HomePage;
