import React from 'react';
import ReactDOM from 'react-dom';
import './themes/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import MonCv from "./monCv";
import {
    Container
} from "react-bootstrap"


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            content: 'home'
        }
        this.handleClickContent = this.handleClickContent.bind(this)
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
        console.log('mounted')
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    handleClickContent(getContent) {
        if (getContent == this.state.content) {
            getContent = 'home';
        }
        this.setState(state => ({
            content: getContent
        }))
    }

    render () {
        return (
            <div id={"page"}>
                <Navbar bg={"primary"} expand={"lg"}>
                    <Navbar.Brand id="navTitle" href={"#home"}>Rodolphe Marbot</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                    <Navbar.Collapse id={"responsive-navbar-nav"}>
                        <Nav id={"navBar"} className={"mr-auto"}>
                            <Button id={"CvButton"} variant={"primary"} onClick={() => this.handleClickContent('CV')}>Mon CV</Button >
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container id={"content"} fluid={"true"} >
                    {this.state.content == 'CV' ? <MonCv /> : null}
                </Container>
            </div>
        )
    }

}

ReactDOM.render(
    <Clock />,
    document.getElementById('nav')
)