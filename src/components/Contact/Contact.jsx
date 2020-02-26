



import React, { Fragment } from 'react';
import { Row, Col, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const location = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22494.391474979282!2d-74.06544267009848!3d4.6855921456277025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcce9b42b6680be38!2sEclosion%20IT!5e0!3m2!1ses!2sco!4v1582739984237!5m2!1ses!2sco";

const Contact = (props) => {
    let subject = '', description = '';
    return (
        <Fragment>
            <Container id="contact">
                <h3 className="text-center">Contact</h3>
                <br />
                <br />
                <Row>
                    <Col md={{ size: 6, offset: 0 }}>
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" id="name" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" id="email" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="Subject">Subject</Label>
                                <Input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    defaultValue={subject} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="Description">Description</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    id="description"
                                    defaultValue={description} />
                            </FormGroup>

                            <Button color='primary'>Submit</Button>
                        </Form>
                    </Col>
                    <Col>
                        <iframe
                            src={location} title="location"
                            width="100%" height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen={true}></iframe>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Contact;