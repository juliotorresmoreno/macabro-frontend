import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { Media } from '../Media';

const Team = () => {
    return (
        <Fragment>
            <div id="team">
                <h3 className="text-center">Team</h3>
                <br />
                <br />
                <Row>
                    <Col>
                        <Media />
                    </Col>
                    <Col>
                        <Media />
                    </Col>
                    <Col>
                        <Media />
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Team;
