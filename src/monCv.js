import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
    Button,
    Container,
    Row,
    Col,
    Card,
    Collapse,
    Accordion
} from 'react-bootstrap';


class MonCv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 0
        }
    }
    render() {
        return (
            <Container fluid={"true"} id={"CVcore"}>
                <Row>
                    <Col id={"col1"} sm={6}>
                        <Container fluid={"true"} id={"formation"}>
                            <h1 className={"title border rounded"}>Formation</h1>
                            <Button
                                onClick={() => this.setState({open: (this.state.open === 1 ? 0 : 1)})}
                                aria-controls="epitechElement"
                                aria-expanded={this.state.open}
                            >
                                Master of Sciences: informatique
                            </Button>
                            <Collapse in={this.state.open}>
                                <Card border={"primary"} style={{ width: '40rem'}} id={"epitechElement"} className={"elementFormation"}>
                                    <Card.Header as={"h3"}>EPITECH 3ème année</Card.Header>
                                    <h4>Lyon</h4>
                                    <h4>2019 - Actuellement</h4>
                                    <Card.Body as={"p"}>
                                        <Row>
                                            <Col>
                                                <p>Python</p>
                                            </Col>
                                            <Col>
                                                <p>C</p>
                                            </Col>
                                            <Col>
                                                <p>PHP</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Intelligence artificielle</p>
                                            </Col>
                                            <Col>
                                                <p>Data</p>
                                            </Col>
                                            <Col>
                                                <p>Réseaux</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Collapse>
                            <Collapse in={this.state.open}>
                                <Card border={"primary"} style={{ width: '40rem'}} id={"epitechElement"} className={"elementFormation"}>
                                    <Card.Header as={"h3"}>Licence de Physiologie</Card.Header>
                                    <h4>Lyon</h4>
                                    <h4>2019 - Actuellement</h4>
                                    <Card.Body as={"p"}>
                                        <Row>
                                            <Col>
                                                <p>Python</p>
                                            </Col>
                                            <Col>
                                                <p>C</p>
                                            </Col>
                                            <Col>
                                                <p>PHP</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Intelligence artificielle</p>
                                            </Col>
                                            <Col>
                                                <p>Data</p>
                                            </Col>
                                            <Col>
                                                <p>Réseaux</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Collapse>
                            <Collapse in={this.state.open}>
                                <Card border={"primary"} style={{ width: '40rem'}} id={"epitechElement"} className={"elementFormation"}>
                                    <Card.Header as={"h3"}>EPITECH 3ème année</Card.Header>
                                    <h4>Lyon</h4>
                                    <h4>2019 - Actuellement</h4>
                                    <Card.Body as={"p"}>
                                        <Row>
                                            <Col>
                                                <p>Python</p>
                                            </Col>
                                            <Col>
                                                <p>C</p>
                                            </Col>
                                            <Col>
                                                <p>PHP</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Intelligence artificielle</p>
                                            </Col>
                                            <Col>
                                                <p>Data</p>
                                            </Col>
                                            <Col>
                                                <p>Réseaux</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Collapse>
                            <Row class={"elementFormation"}>
                                <h1>Licence de Physiologie</h1>
                                <h2>Université Claude Bernard</h2>
                                <h3>Lyon</h3>
                                <h4>2016 - 2019</h4>
                                <Container>
                                    <Row>
                                        <Col>
                                            <p>Physiologie</p>
                                        </Col>
                                        <Col>
                                            <p>Statistiques</p>
                                        </Col>
                                        <Col>
                                            <p>Biologie cellulaire</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Neurosciences</p>
                                        </Col>
                                        <Col>
                                            <p>Analyse de données</p>
                                        </Col>
                                        <Col>
                                            <p>Bio-informatique</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                            <Row class={"elementFormation"}>
                                <h1>Licence 1 et 2 de Biologie</h1>
                                <h2>Université Claude Bernard</h2>
                                <h3>Nantes</h3>
                                <h4>2014 - 2016</h4>
                            </Row>
                        </Container>
                    </Col>
                    <Col id={"col2"} sm={6}>
                        <Container>
                            Coucou
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MonCv