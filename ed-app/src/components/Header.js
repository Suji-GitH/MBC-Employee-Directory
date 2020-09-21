import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import '../css/style.css';

class Header extends Component {
    render() {
        return (
            <Navbar id="header">
                <Navbar.Brand id="headerTitle">Employee Directory</Navbar.Brand>
            </Navbar>
        );
    }

}

export default Header;