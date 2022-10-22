import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DilemmaLogo from '../../assets/dilemmaLogo.jpg';
import { withRouter } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai'

const LandingPage = (props) => {
    return (
        <>
            <Row className="Home justify-content-md-center">
                <Col className="right-side" sm={12} md={8} style={{ padding: '0 10px', alignItems: 'center' }}>
                    <Image src={DilemmaLogo} alt="career logo" style={{ maxWidth: '470px', width: '100%', margin: '100px 400px', padding: '10px' }} fluid />
                    <p style={{ fontSize: '16px', color: '#6b818b', textAlign: 'center', marginTop: '-100px' }}>Always confused while buying gadgets?<br /> Use our website to get suggestions by directly entering your required specifications!</p>

                    <center>
                        <Button as={Link} to="/getSuggestions" variant="outline-primary" style={{ padding: '10px 30px', textTransform: 'uppercase' }}>Get Started <AiOutlineDoubleRight style={{ marginTop: '-5px', marginLeft: '-3px' }} /></Button>
                    </center>
                    <br />
                </Col>
            </Row>
        </>
    )
}

export default withRouter(LandingPage);
