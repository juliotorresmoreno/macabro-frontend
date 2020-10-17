
// @flow

import React, { Fragment, CSSProperties } from 'react';
import { Row, Col } from 'reactstrap';

interface Styles {
    img: CSSProperties
}

const styles: Styles = {
    img: {
        width: '100%'
    }
}

const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Odoo_12e_homepage.png/800px-Odoo_12e_homepage.png';

const Testimonials = () => (
    <Fragment>
        <Row>
            <Col md={7}>
                <img style={styles.img} src={imgSrc} alt="" />
            </Col>
            <Col md={5}>
                <h4>El fin de las integraciones problemáticas.</h4>
                <p className="text-justify">Between the Odoo apps and the tens of thousands of Community apps, there is something to help address all of your business needs in a single, cost-effective and modular solution: no more work to get different technology cooperating.  Odoo apps are perfectly integrated with each other, allowing you to fully automate your business processes and reap the savings and benefits.</p>
                <p className="text-justify">“Hemos reemplazado 14 aplicaciones diferentes y hemos aumentado las ganancias en un 10% de la noche a la mañana.”</p>
                <p><strong>Marc Peeters</strong>, director general de la Divisón de Ventas.</p>
                <br />
            </Col>
        </Row>
    </Fragment>
);

export default Testimonials;