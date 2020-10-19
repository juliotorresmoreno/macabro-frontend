

import React, { Fragment } from 'react';
import { Button, Col, Row } from 'reactstrap';
import Table from './Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface SupportProps {

}

const Support: React.FC<SupportProps> = () => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <Button color='primary'>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Row>
            <br />
            <Table />
        </Fragment>
    )
}

export default Support;