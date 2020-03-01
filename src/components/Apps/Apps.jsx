

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Category from './Category';


const data = [
    {
        title: 'AUMENTE SUS VENTAS',
        apps: [
            { name: "CRM", logo: "//download.odoocdn.com/icons/crm/static/description/icon.svg", pageURL: "/es_ES/page/crm" },
            { name: "POS", logo: "//download.odoocdn.com/icons/point_of_sale/static/description/icon.svg", pageURL: "/es_ES/page/point-of-sale" },
            { name: "Ventas", logo: "//download.odoocdn.com/icons/sale/static/description/icon.svg", pageURL: "/es_ES/page/sales" }
        ]
    },
    {
        title: 'INTEGRE SUS SERVICIOS',
        apps: [
            {
                name: "Proyecto",
                logo: "//download.odoocdn.com/icons/project/static/description/icon.svg",
                pageURL: "/es_ES/page/project-management"
            },
            {
                name: "Productividad",
                logo: "//download.odoocdn.com/icons/hr_timesheet/static/description/icon.svg",
                pageURL: "/es_ES/page/timesheet-mobile-app"
            },
            {
                name: "Asistencia",
                logo: "//download.odoocdn.com/icons/helpdesk/static/description/icon.svg",
                pageURL: "/es_ES/page/helpdesk"
            }
        ]
    },
    {
        title: 'OPTIMICE SUS OPERACIONES',
        apps: [
            {
                name: "Inventario",
                logo: "//download.odoocdn.com/icons/stock/static/description/icon.svg",
                pageURL: "/es_ES/page/stock"
            },
            {
                name: "MRP",
                logo: "//download.odoocdn.com/icons/mrp/static/description/icon.svg",
                pageURL: "/es_ES/page/mrp"
            },
            {
                name: "Compra",
                logo: "//download.odoocdn.com/icons/purchase/static/description/icon.svg",
                pageURL: "/es_ES/page/purchase"
            }
        ]
    },
    {
        title: "CONSTRUYA SITIOS WEB IMPACTANTES",
        apps: [
            {
                name: "Creador de sitios web",
                logo: "//download.odoocdn.com/icons/website/static/description/icon.svg",
                pageURL: "/es_ES/page/website"
            },
            {
                name: "Comercio electrónico",
                logo: "//download.odoocdn.com/icons/website_sale/static/description/icon.svg",
                pageURL: "/es_ES/page/website_sale"
            }
        ]
    },
    {
        title: 'GESTIONE SUS FINANZAS',
        apps: [
            {
                name: "Facturación",
                logo: "//download.odoocdn.com/icons/account/static/description/icon.png",
                pageURL: "/es_ES/page/account"
            },
            {
                name: "Contabilidad",
                logo: "//download.odoocdn.com/icons/account_accountant/static/description/icon.svg",
                pageURL: "/es_ES/page/account_accountant"
            }
        ]
    },
    {
        title: 'ESTRATEGIAS DE MERCADOTECNIA',
        apps: [
            {
                name: "Marketing electrónico",
                logo: "//download.odoocdn.com/icons/mass_mailing/static/description/icon.svg",
                pageURL: "/es_ES/page/mass_mailing"
            },
            {
                name: "Automatización de marketing",
                logo: "//download.odoocdn.com/icons/marketing_automation/static/description/icon.svg",
                pageURL: "/es_ES/page/marketing_automation"
            }
        ]
    },
    {
        title: 'PERSONALICE Y DESARROLLE',
        apps: [
            {
                name: "Studio",
                logo: "//download.odoocdn.com/icons/web_studio/static/description/icon.svg",
                pageURL: "/es_ES/page/web_studio"
            }
        ]
    }
];

const Apps = () => (
    <Fragment>
        <section className="overflow-hidden bg-white mt-0">
            <h2 className="text-center mt-4 mb-5">Una necesidad,&nbsp;<b>una&nbsp;app</b></h2>
            <div className="o_apps_list px-3">
                <Row>
                    {data.map((item, key) =>
                        <Fragment key={key}>
                            <Col md={3}>
                                <Category {...item} />
                                <br />
                            </Col>
                        </Fragment>
                    )}
                </Row>
            </div>
            <div className="text-right">
                <Link to="/all-apps">
                    …y mucho, mucho más
                </Link>
            </div>
        </section>

    </Fragment>
)

export default Apps;