
// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import App from '../App';

interface CategoryProps {
    title: string;
    apps: []
}

const Category = (props: CategoryProps) => {
    const { apps, title } = props;
    return (
        <div className="d-flex flex-column">
            <b className="">{title}</b>
            <div className="d-inline-flex justify-content-between">
                <Row>
                    {apps.map((app, key) =>
                        <Fragment key={key}>
                            <Col>
                                <App {...app} />
                            </Col>
                        </Fragment>)}
                </Row>
            </div>
        </div>
    );
}

export default Category;