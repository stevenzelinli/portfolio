import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Col , Container, Row} from "react-bootstrap";

const Skills = ({ skills }) => (
    <Container>
        <Row>
        {skills.map(({ name, description, styleName }) =>
            <Col xs={12} md={6} key={name}>
                <h4>{ name }</h4>
                <div className="skill-container">
                    <div className={ "skills " + styleName }>{ description }</div>
                </div>
            </Col>
        )}
        </Row>
    </Container>
);

Skills.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
            styleName: PropTypes.string,
        }),
    ).isRequired,
};

export default Skills;
