import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {

    render(props) {
        return (
            <>
                <Form.Control id="search" type="text" placeholder="Search User by name..." onChange={this.props.filterByName} />
                <Form.Text id="searchHelpBlock" muted>
                <FontAwesomeIcon icon={faSearch}  />
                     Search User by Name or click on the "Name" column header to sort by alphabetical order
                </Form.Text>
            </>
        )
    }
}

export default Search;