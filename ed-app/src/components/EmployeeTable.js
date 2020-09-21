import React, { Component } from "react";
import EmployeeDetails from './EmployeeDetails';

class EmployeesTable extends Component {

    renderEmployee = (employee, index) => {

        let displayed;

        if (employee.display === undefined) {
            displayed = true;
        } else {
            displayed = employee.display;
        }

        if (displayed === true) {
            return (
                <EmployeeDetails 
                    key={index}
                    order={index + 1}
                    image={employee.image}
                    name={employee.name}
                    cell={employee.cell}
                    email={employee.email}
                />
            );
        }

    }

    render(props) {
        
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Avatar</th>
                        <th scope="col" className="clickable" title="Sort alphabetically" 
                            onClick={() => this.props.sortAlpha(this.props.employees)}>Name {this.props.sortArrow}</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.employees.map((employee, index) => (
                            this.renderEmployee(employee, index)
                        ))
                    }
                </tbody>
            </table>
        );
    }

}

export default EmployeesTable;