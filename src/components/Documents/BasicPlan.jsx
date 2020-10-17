

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

const styles = {
    img: { width: '100%' }
}


const BasicPlan = () => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida dui at orci porta, at vulputate lectus vehicula. Quisque pretium ullamcorper cursus. Donec consequat justo quam, eu vulputate lorem vulputate at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ac nisi elit. Nullam sagittis libero sapien, quis convallis erat eleifend sit amet. Praesent porttitor lectus ac sem porttitor semper.</p>

                    <p>Donec tempor malesuada metus non hendrerit. Integer feugiat augue vitae lorem pellentesque luctus vitae nec augue. Morbi scelerisque porttitor ante et congue. Morbi varius augue in sapien porta euismod. Nulla sed orci ac nisl ultricies semper. Nullam viverra quis enim sed sagittis. Etiam sit amet hendrerit velit.</p>

                    <p>Nam id lectus dui. Nam vitae tincidunt nisl, quis rhoncus purus. In ut felis metus. Aenean porttitor vulputate sapien nec rutrum. Donec luctus dolor non nunc posuere, eu feugiat ex pharetra. In ut placerat lorem, a molestie ante. Nulla ut lorem porta, molestie est quis, placerat sem.</p>
                </Col>
                <Col md={4}>
                    <img
                        alt='' style={styles.img}
                        src='https://geeksuper.com/wp-content/uploads/2018/10/saas-778x445.jpg' />
                </Col>
            </Row>
        </Fragment>
    );
}

export default BasicPlan;