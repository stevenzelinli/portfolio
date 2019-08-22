import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Col, Container, Jumbotron, Nav, Row, Tab, } from 'react-bootstrap';
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
                            <div className="skills java">90%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Spring Framework</h4>
                        <div className="skill-container">
                            <div className="skills spring">90%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Docker + Kubernetes</h4>
                        <div className="skill-container">
                            <div className="skills docker">85%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>ReactJS</h4>
                        <div className="skill-container">
                            <div className="skills react">80%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Google Analytics</h4>
                        <div className="skill-container">
                            <div className="skills google">70%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>CSS + HTML5</h4>
                        <div className="skill-container">
                            <div className="skills css">80%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Gitlab CI</h4>
                        <div className="skill-container">
                            <div className="skills gci">80%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>SQL</h4>
                        <div className="skill-container">
                            <div className="skills sql">75%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Jenkins</h4>
                        <div className="skill-container">
                            <div className="skills jenkins">70%</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Python</h4>
                        <div className="skill-container">
                            <div className="skills python">70%</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <Jumbotron className="anchors" id="experience">
            <h1>Experience</h1>
            <Tab.Container id="left-exp-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Autodata</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Mircom</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                Nice
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Nice Nice
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Jumbotron>
        <Jumbotron className="anchors" id="projects">
            <h1>Projects</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis mauris, tristique eget sagittis et, egestas sit amet dolor.
                Vivamus dictum varius sem, eget faucibus libero rutrum nec. Aenean lobortis ex ipsum, sit amet posuere turpis aliquam quis. Cras in
                tellus aliquam, ullamcorper nibh feugiat, vestibulum lacus. Morbi tempor lorem libero, et venenatis lectus mollis ac. Suspendisse
                vitae dui sit amet mauris finibus congue. Sed elementum nibh rhoncus, placerat metus nec, volutpat justo. Etiam at erat eget nibh
                fermentum dignissim a nec massa. Suspendisse auctor ante id scelerisque suscipit. Aliquam in tincidunt sem. Sed efficitur congue
                egestas.

                Praesent mattis mollis nisl, a aliquet lorem vehicula nec. Integer velit risus, interdum sit amet lobortis non, lacinia vel ante.
                Vestibulum eu urna sem. Quisque interdum odio sapien, vitae eleifend ex auctor mollis. Nullam at elit ac diam ultrices placerat non
                eget justo. Vivamus malesuada risus nec ex aliquet, ac aliquet erat cursus. Suspendisse tincidunt sodales lorem vitae ultricies. Sed
                et commodo diam, sed ullamcorper odio. Donec posuere porttitor justo nec consequat. Vestibulum rutrum blandit sem vitae vestibulum.
                Curabitur dignissim pellentesque ex a viverra.

                Cras diam nibh, eleifend sit amet feugiat in, imperdiet sed enim. Donec vitae lorem in odio facilisis aliquam. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed bibendum odio. Integer pulvinar vitae enim a venenatis. Nam
                bibendum fermentum congue. Mauris at ligula justo. Mauris ex felis, consectetur at mauris pretium, accumsan facilisis eros. Vestibulum
                tempus gravida libero. Etiam ac volutpat enim, maximus posuere nulla. Vivamus ac enim iaculis, euismod est at, scelerisque turpis.
                Nullam sodales ac est in dignissim. Nullam eu rutrum nisl. Duis et lorem ante.

                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget condimentum dui. Nullam facilisis lacus fermentum, semper
                enim in, convallis est. Nulla varius justo sed libero venenatis, nec molestie nisi semper. Proin in rutrum ante, vitae interdum nulla.
                Phasellus nunc metus, tincidunt in orci in, fermentum finibus ligula. Sed porttitor, diam ut ultrices porta, tellus nulla tincidunt
                elit, ac varius mi eros a nunc. Vestibulum placerat vel nulla in vestibulum. Curabitur scelerisque efficitur lacinia. Curabitur dictum
                odio at neque sollicitudin, a ultricies lectus feugiat.

                Maecenas turpis risus, varius eu laoreet sit amet, varius ac tellus. Sed hendrerit id tellus a varius. Nullam a orci id metus mattis
                porttitor quis at urna. Sed eu mollis lectus. Curabitur hendrerit metus metus, nec ornare ante pharetra vitae. Fusce hendrerit urna ut
                iaculis luctus. Mauris at varius ex. In et dolor orci. Sed mollis, augue non luctus egestas, augue libero tincidunt enim, in molestie
                ante turpis eget justo. Aliquam efficitur quam nec ex lacinia, non commodo orci mollis.
            </p>
        </Jumbotron>
        <Jumbotron className="anchors" id="contact">
            <h1>Contact</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis mauris, tristique eget sagittis et, egestas sit amet dolor.
                Vivamus dictum varius sem, eget faucibus libero rutrum nec. Aenean lobortis ex ipsum, sit amet posuere turpis aliquam quis. Cras in
                tellus aliquam, ullamcorper nibh feugiat, vestibulum lacus. Morbi tempor lorem libero, et venenatis lectus mollis ac. Suspendisse
                vitae dui sit amet mauris finibus congue. Sed elementum nibh rhoncus, placerat metus nec, volutpat justo. Etiam at erat eget nibh
                fermentum dignissim a nec massa. Suspendisse auctor ante id scelerisque suscipit. Aliquam in tincidunt sem. Sed efficitur congue
                egestas.

                Praesent mattis mollis nisl, a aliquet lorem vehicula nec. Integer velit risus, interdum sit amet lobortis non, lacinia vel ante.
                Vestibulum eu urna sem. Quisque interdum odio sapien, vitae eleifend ex auctor mollis. Nullam at elit ac diam ultrices placerat non
                eget justo. Vivamus malesuada risus nec ex aliquet, ac aliquet erat cursus. Suspendisse tincidunt sodales lorem vitae ultricies. Sed
                et commodo diam, sed ullamcorper odio. Donec posuere porttitor justo nec consequat. Vestibulum rutrum blandit sem vitae vestibulum.
                Curabitur dignissim pellentesque ex a viverra.

                Cras diam nibh, eleifend sit amet feugiat in, imperdiet sed enim. Donec vitae lorem in odio facilisis aliquam. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed bibendum odio. Integer pulvinar vitae enim a venenatis. Nam
                bibendum fermentum congue. Mauris at ligula justo. Mauris ex felis, consectetur at mauris pretium, accumsan facilisis eros. Vestibulum
                tempus gravida libero. Etiam ac volutpat enim, maximus posuere nulla. Vivamus ac enim iaculis, euismod est at, scelerisque turpis.
                Nullam sodales ac est in dignissim. Nullam eu rutrum nisl. Duis et lorem ante.

                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget condimentum dui. Nullam facilisis lacus fermentum, semper
                enim in, convallis est. Nulla varius justo sed libero venenatis, nec molestie nisi semper. Proin in rutrum ante, vitae interdum nulla.
                Phasellus nunc metus, tincidunt in orci in, fermentum finibus ligula. Sed porttitor, diam ut ultrices porta, tellus nulla tincidunt
                elit, ac varius mi eros a nunc. Vestibulum placerat vel nulla in vestibulum. Curabitur scelerisque efficitur lacinia. Curabitur dictum
                odio at neque sollicitudin, a ultricies lectus feugiat.

                Maecenas turpis risus, varius eu laoreet sit amet, varius ac tellus. Sed hendrerit id tellus a varius. Nullam a orci id metus mattis
                porttitor quis at urna. Sed eu mollis lectus. Curabitur hendrerit metus metus, nec ornare ante pharetra vitae. Fusce hendrerit urna ut
                iaculis luctus. Mauris at varius ex. In et dolor orci. Sed mollis, augue non luctus egestas, augue libero tincidunt enim, in molestie
                ante turpis eget justo. Aliquam efficitur quam nec ex lacinia, non commodo orci mollis.
            </p>
        </Jumbotron>
    </div>
);

export default HomePage;
