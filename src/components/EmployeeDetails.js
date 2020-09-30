import React, { Component } from "react";
import '../css/style.css';

class Employee extends Component {

    render(props) {

        const { order, image, name, cell, email} = this.props;
        
        return (
            <tr>
                <td>{order}</td>
                <td><img src={image} alt={name} /></td>
                <td>{name}</td>
                <td>{cell}</td>
                <td>{email}</td>
            </tr>
        )
    }

}

export default Employee;