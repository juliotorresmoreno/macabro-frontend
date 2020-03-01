import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Media from '../Media';

const people = [
    {
        title: 'Carlos Navarrete',
        img: 'https://media-exp1.licdn.com/dms/image/C5603AQEhknn-X5sVMw/profile-displayphoto-shrink_800_800/0?e=1588204800&v=beta&t=sv1-h4653gzCP7nuUt7hTKdEGhTV2iESuczb6yLeoNs',
        content: (
            <Fragment>
                <strong>Ingeniero de sistemas</strong><br />
                Gerente de proyectos
            </Fragment>
        )
    },
    {
        title: 'Julio Torres',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQHzkANgrLHNLQ/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=vwW9JVLF67pO8I9w4xSrs9cJ4X4uPJmtzqavxk2Vblc',
        content: (
            <Fragment>
                <strong>Full Stack Developer</strong><br />
                Cientifico de datos
            </Fragment>
        )
    },
    {
        title: 'Leonard Garavito ',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQH1mcnU6gcHZg/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=afvRitnIKHDduCU-jRjqImxoMc_XtF0VgEGXJQrHw94',
        content: (
            <Fragment>
                <strong>Contabilidad y finanzas</strong><br />
                Consultor de empresas
            </Fragment>
        )
    }
]

const Team = () => {
    return (
        <Fragment>
            <div id="team">
                <h3 className="text-center">Team</h3>
                <br />
                <br />
                <Row>
                    {people.map((person, key) => (
                        <Fragment key={key}>
                            <Col>
                                <Media {...person} />
                            </Col>
                        </Fragment>
                    ))}
                </Row>
            </div>
        </Fragment>
    );
};

export default Team;
