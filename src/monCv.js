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
    Accordion,
    Fade,
    Table,
    Tooltip,
    OverlayTrigger,
    Overlay,
    Carousel,
} from 'react-bootstrap';


class MonCv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openEpitech: 0,
            openPhysio: 0,
            openBio: 0,
            contentFormation: 0,
            contentGestion: 0,
            contentCulture: 0,
            contentManagement: 0,
        }
    }
    render() {
        return (
            <Container fluid={"true"} id={"CVcore"}>
                <Row>
                    <Col id={"col1"} sm={6}>
                        <Accordion>
                            <Card border={"primary"}>
                                <Accordion.Toggle as={Button} variant={"light"} eventKey={"0"}>
                                    <h1 className={"title"}>Formation</h1>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={"0"}>
                                    <Container fluid={"true"} id={"formation"}>
                                        <Row>
                                            <Button
                                                onClick={() => this.setState({openEpitech: (this.state.openEpitech === 1 ? 0 : 1)})}
                                                aria-controls="epitechElement"
                                                aria-expanded={this.state.openEpitech}
                                                variant={"outline-dark"}
                                                size={"lg"}
                                                block
                                            >
                                                Master of Sciences: informatique
                                            </Button>
                                            <Collapse in={this.state.openEpitech}>
                                                <Card border={"primary"} style={{ width: '100%'}} id={"epitechElement"} className={"elementFormation"}>
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
                                        </Row>
                                        <Row>
                                        <Button
                                            onClick={() => this.setState({openPhysio: (this.state.openPhysio === 1 ? 0 : 1)})}
                                            aria-controls="epitechElement"
                                            aria-expanded={this.state.openPhysio}
                                            variant={"outline-dark"}
                                            size={"lg"}
                                            block
                                        >
                                            Licence de Physiologie
                                        </Button>
                                            <Collapse in={this.state.openPhysio}>
                                                <Card border={"primary"} style={{ width: '100%'}} id={"epitechElement"} className={"elementFormation"}>
                                                    <Card.Header as={"h3"}>Université Claude Bernard</Card.Header>
                                                    <h4>Lyon</h4>
                                                    <h4>2016 - 2019</h4>
                                                    <Card.Body as={"p"}>
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
                                                    </Card.Body>
                                                </Card>
                                            </Collapse>
                                        </Row>
                                        <Row>
                                            <Button
                                                onClick={() => this.setState({openBio: (this.state.openBio === 1 ? 0 : 1)})}
                                                aria-controls="epitechElement"
                                                aria-expanded={this.state.openBio}
                                                variant={"outline-dark"}
                                                size={"lg"}
                                                block
                                            >
                                                Licence 1 et 2 de Biologie
                                            </Button>
                                            <Collapse in={this.state.openBio}>
                                                <Card border={"primary"} style={{ width: '100%'}} id={"epitechElement"} className={"elementFormation"}>
                                                    <Card.Header as={"h3"}>Université de Nantes</Card.Header>
                                                    <h4>Nantes</h4>
                                                    <h4>2014 - 2016</h4>
                                                </Card>
                                            </Collapse>
                                        </Row>
                                    </Container>
                                </Accordion.Collapse>
                                <Accordion.Toggle eventKey={"1"} as={Button} variant={"light"}>
                                    <h1 className={"title"}>Expériences professionnelles</h1>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={"1"}>
                                    <Card id={"ExpPro"}>
                                        <Card.Header as={"h3"}>
                                            Chargé de zone
                                        </Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <h4>Mc Donald's</h4>
                                                </Col>
                                                <Col>
                                                    <h5>10/2016 - 08/2019</h5>
                                                </Col>
                                                <Col>
                                                    <h5>Saint-Genis-Laval</h5>
                                                </Col>
                                            </Row>
                                            <Row id={"ProContent"}>
                                                <Col>
                                                    <Table striped bordered hover>
                                                        <tbody>
                                                        <tr onMouseOut={() => this.setState({contentFormation: 0})} onMouseOver={() => this.setState({contentFormation: 1})}>Formation</tr>
                                                        <tr onMouseOut={() => this.setState({contentManagement: 0})} onMouseOver={() => this.setState({contentManagement: 1})}>Management</tr>
                                                        <tr onMouseOut={() => this.setState({contentGestion: 0})} onMouseOver={() => this.setState({contentGestion: 1})}>Gestion de zone</tr>
                                                        <tr onMouseOut={() => this.setState({contentCulture: 0})} onMouseOver={() => this.setState({contentCulture: 1})}>Culture service</tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                                <Col>
                                                    <Collapse in={this.state.contentFormation}>
                                                        <div className={"contentFormation"}>
                                                            <h6>Missions:</h6>
                                                            <p>1) Former les équipiers sur de nouveaux postes afin qu'ils y soient opérationnels.</p>
                                                            <p>2) Formuler des attentes à chaque équipier dans une optique d'amélioration.</p>
                                                            <p>3) Entretenir les valeurs McDonald's dans l'ensemble de l'équipe.</p>
                                                        </div>
                                                    </Collapse>
                                                    <Collapse in={this.state.contentManagement}>
                                                        <div className={"contentFormation"}>
                                                            <h6>Missions:</h6>
                                                            <p>1) Responsabiliser les équipiers et leurs donner des objectifs SMART.</p>
                                                            <p>2) Se présenter comme un leader dans l'équipe et entretenir la motivation de chaque équipier.</p>
                                                            <p>3) Atteindre l'ensemble des objectifs établis lors des prévisions.</p>
                                                        </div>
                                                    </Collapse>
                                                    <Collapse in={this.state.contentGestion}>
                                                        <div className={"contentFormation"}>
                                                            <h6>Missions:</h6>
                                                            <p>1) Effecuter les prévisions et la préparation du rush.</p>
                                                            <p>2) Vérifier l'ensemble des DLC du restaurant et effectuer la rotation des DLC.</p>
                                                            <p>3) Avoir une vue d'ensemble sur le restaurant et réagir adéquatement à chaque situation.</p>
                                                        </div>
                                                    </Collapse>
                                                    <Collapse in={this.state.contentCulture}>
                                                        <div className={"contentFormation"}>
                                                            <h6>Missions:</h6>
                                                            <p>1) Incarner l'image de McDonald's auprès de chacun de nos clients.</p>
                                                            <p>2) Se comporter selon les attitudes de service McDonald's ainsi que respecter les signatures de service de l'enseigne.</p>
                                                            <p>3) Mettre en place la reconquète client.</p>
                                                        </div>
                                                    </Collapse>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                        <Card.Header as={"h3"}>Préparateur de commandes</Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <h4>Delanchy</h4>
                                                </Col>
                                                <Col>
                                                    <h5>2016</h5>
                                                </Col>
                                                <Col>
                                                    <h5>Mortagne-sur-sèvre</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <p id={"paraDel"}>Comptage et distribution de produits alimentaires à destination de plusieurs plateformes</p>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Accordion.Collapse>
                                <Accordion.Toggle eventKey={"2"} as={Button} variant={"light"}>
                                    <h1 className={"title"}>Diplômes</h1>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={"2"}>
                                    <Card>
                                        <Card.Header as={"h3"}>Licence de Physiologie</Card.Header>
                                        <Card.Body>
                                            <h4>Université Claude Bernard</h4>
                                            <h4>2019</h4>
                                        </Card.Body>
                                        <Card.Header as={"h3"}>Baccalauréat S Mention assez bien</Card.Header>
                                        <Card.Body>
                                            <h4>Lycée Europe Robers Schuman</h4>
                                            <h4>2014</h4>
                                        </Card.Body>
                                    </Card>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col id={"col2"} sm={6}>
                        <Accordion>
                            <Card>
                                <Accordion.Toggle eventKey={"4"} as={Button} variant={"light"}>
                                    <h1>Compétences</h1>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={"4"}>
                                    <Card>
                                        <Card.Header as={"h3"}>Compétences</Card.Header>
                                        <Card.Body>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className={"d-block w-100"}
                                                        src={""}
                                                        alt={"first slide"}
                                                    />
                                                    <Carousel.Caption>
                                                        <h5>Deeplearning</h5>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className={"d-block w-100"}
                                                        src={""}
                                                        alt={"second slide"}
                                                    />
                                                    <Carousel.Caption>
                                                        <h5>Deeplearning</h5>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className={"d-block w-100"}
                                                        src={""}
                                                        alt={"third slide"}
                                                    />
                                                    <Carousel.Caption>
                                                        <h5>Deeplearning</h5>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Card.Body>
                                    </Card>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MonCv