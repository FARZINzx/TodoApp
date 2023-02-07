import React  from "react";
import {Alert} from "react-bootstrap";

function AlertPRO() {

        return (
            <Alert variant="danger" dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Please add a <strong>Todo</strong>
                </p>
            </Alert>
        );
    }


export default AlertPRO

