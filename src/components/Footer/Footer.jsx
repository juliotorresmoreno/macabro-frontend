
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { WithRouterProps } from 'react-router';

const Footer = (props: WithRouterProps) => {
    const toTeam = (e) => {
        if (e.type === 'keypress' && e.key !== 'Enter') {
            return;
        }
        window.location.href = "#team"
    }
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width={24} height={24} />
                    <small className="d-block mb-3 text-muted">© 2017-2018</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Cool stuff</a></li>
                        <li><a className="text-muted" href="/">Random feature</a></li>
                        <li><a className="text-muted" href="/">Team feature</a></li>
                        <li><a className="text-muted" href="/">Stuff for developers</a></li>
                        <li><a className="text-muted" href="/">Another one</a></li>
                        <li><a className="text-muted" href="/">Last time</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/">Resource</a></li>
                        <li><a className="text-muted" href="/">Resource name</a></li>
                        <li><a className="text-muted" href="/">Another resource</a></li>
                        <li><a className="text-muted" href="/">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <Link
                                className="text-muted" to="/#team"
                                onKeyPress={toTeam}
                                onMouseUp={toTeam}>
                                Team
                            </Link>
                        </li>
                        <li><Link className="text-muted" to="/privacy">Privacy</Link></li>
                        <li><Link className="text-muted" to="/terms">Terms</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default withRouter(Footer);