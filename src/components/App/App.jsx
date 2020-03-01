
// @flow

import React from 'react';

interface AppProps {
    logo: String;
    pageURL: String;
    name: String;
}

const App = (props: AppProps) => {
    const logo = props.logo;
    const pageURL = props.pageURL;
    const name = props.name;

    return (
        <span href={pageURL}>
            <img className="deep-1" src={logo} style={{ height: 70 }} alt={name} />
            <br />
            <b className="text-gray-darker">
                {name}
            </b>
        </span>
    );
}

export default App;