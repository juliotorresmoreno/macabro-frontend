

import React, { Fragment } from 'react';
import { Card, CardBody, Button } from 'reactstrap';

interface SupportProps {

}

const Support: React.FC<SupportProps> = () => {
    return (
        <Fragment>
            <Card>
                <CardBody>
                    <Button color='primary'>Nuevo</Button>

                    <br />
                    <br />
                    <textarea></textarea>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default Support;