

import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const img = 'data:image/svg+xml;charset=UTF-8,%3Csvg width%3D"64" height%3D"64" xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox%3D"0 0 64 64" preserveAspectRatio%3D"none"%3E%3Cdefs%3E%3Cstyle type%3D"text%2Fcss"%3E%23holder_1707e6613b5 text %7B fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C Helvetica%2C Open Sans%2C sans-serif%2C monospace%3Bfont-size%3A10pt %7D %3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg id%3D"holder_1707e6613b5"%3E%3Crect width%3D"64" height%3D"64" fill%3D"%23EEEEEE"%3E%3C%2Frect%3E%3Cg%3E%3Ctext x%3D"13.458333969116211" y%3D"36.8"%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

const Product = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={img} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="primary">Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Product;
