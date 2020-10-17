
import React from 'react';
import { Link, withRouter, RouteChildrenProps } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import classname from 'classname';
const className = "list-group-item-action list-group-item";

interface MenuProps extends RouteChildrenProps {

}

const Menu: React.FC<MenuProps> = (props) => {
    let pathname = props.location.pathname;
    let actives = [
        classname({ active: /\/services\/odoo/.test(pathname) }),
        classname({ active: pathname === '/services/support' }),
        classname({ active: pathname === '/services/messages' })
    ]
    return (
        <ListGroup>
            <Link to="/services/odoo"
                className={className + ' ' + actives[0]}>
                Odoo
            </Link>
            <Link to="/services/support"
                className={className + ' ' + actives[1]}>
                Soporte
            </Link>
            <Link to="/services/messages"
                className={className + ' ' + actives[2]}>
                Mensajes
            </Link>
        </ListGroup>
    )
};

export default withRouter(Menu);