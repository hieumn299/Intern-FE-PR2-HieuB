import React from "react";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import Row from "react-bootstrap/Row";

function Control() {
    return (
        <Row className="mt-4">
            <Search></Search>
            <Sort></Sort>
        </Row>
    );
}

export default Control;
