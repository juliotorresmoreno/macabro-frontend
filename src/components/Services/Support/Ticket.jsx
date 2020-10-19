

import React, { Fragment, CSSProperties } from 'react';
import { Card, CardBody, Button, Input, Label } from 'reactstrap';

interface TicketProps {

}

const styles: { [x: string]: CSSProperties } = {
    textarea: {
        width: '100%',
        minHeight: 300
    },
    subjectLabel: {
        fontWeight: 'bold'
    }
}

const Ticket: React.FC<TicketProps> = () => {
    return (
        <Fragment>
            <Card>
                <CardBody>
                    <Label style={styles.subjectLabel}>Asunto</Label>:
                    <Input type='text' />
                    <br />
                    <Label style={styles.subjectLabel}>Descripción</Label>:
                    <Input type='textarea' style={styles.textarea} />
                    <br/>
                    <Button color='primary'>Nuevo</Button>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default Ticket;