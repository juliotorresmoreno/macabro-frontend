

import React, { Fragment, CSSProperties } from 'react';
import { Row, Col } from 'reactstrap';
import Media from '../../Media';

const features = [
    {
        title: 'Odoo es un CRM',
        content: (
            <Fragment>
                Customer relationship management (CRM) es un enfoque para gestionar la 
                interacción de una empresa con sus clientes actuales y potenciales. 
                Utiliza el análisis de datos de la historia de los clientes con la 
                empresa y para mejorar las relaciones comerciales con dichos clientes, 
                centrándose específicamente en la retención de los mismos y, en última 
                instancia, impulsando el crecimiento de las ventas.3
            </Fragment>
        )
    },
    {
        title: 'Odoo es un ERP',
        content: (
            <Fragment>
                Los sistemas de planificación de recursos empresariales (ERP, por sus 
                siglas en inglés, enterprise resource planning) son los sistemas de 
                información gerenciales que integran y manejan muchos de los negocios 
                asociados con las operaciones de producción y de los aspectos de 
                distribución de una compañía en la producción de bienes o servicios. 
            </Fragment>
        )
    },
];

const imgStyle: CSSProperties = { 
    marginLeft: '50%', 
    transform: 'translateX(-50%)'
}

const Features = (props: FeaturesProps) => (
    <Fragment>
        <section id="features">
            <Row>
                <Col md={6} xs={12}>
                    <Media {...features[0]} />
                </Col>
                <Col md={6} xs={12}>
                    <img alt='' src='/img/664px-CRM1.0.jpg' style={imgStyle} />
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col md={6} xs={12}>
                <img alt='' src='/img/teamwork-2207742_640.png' style={imgStyle} />

                </Col>
                <Col md={6} xs={12}>
                    <Media {...features[1]} />
                </Col>
            </Row>
        </section>
    </Fragment>
)

export default Features;