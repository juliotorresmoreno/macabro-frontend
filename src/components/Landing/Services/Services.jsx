
// @flow

import React, { Fragment } from 'react';
import {
    Jumbotron,
    Container
} from 'reactstrap';

const styles = {
    img: {
        height: '100%'
    },
    container: {
        padding: 40
    }
}

const Services = () => {
    return (
        <Fragment>
            <Jumbotron fluid>
                <Container style={styles.container}>
                    <h1 className="display-3 text-center">
                        ODOO CRM/ERP como servicio
                    </h1>
                    <p className="lead">
                        La gestión de clientes y usuarios es una de las claves
                        para que un negocio funcione y si para el tuyo esto es
                        esencial, es importante que cuentes con un CRM de
                        calidad y que te ayude a gestionar todos los datos
                        recogidos.
                    </p>
                    <a href="#features">Saber mas</a>
                </Container>
            </Jumbotron>
        </Fragment>
    )
}

export default Services;
