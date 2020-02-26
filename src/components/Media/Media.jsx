import React from 'react';
import { Media } from 'reactstrap';

const img = 'data:image/svg+xml;charset=UTF-8,%3Csvg width%3D"64" height%3D"64" xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox%3D"0 0 64 64" preserveAspectRatio%3D"none"%3E%3Cdefs%3E%3Cstyle type%3D"text%2Fcss"%3E%23holder_1707e6613b5 text %7B fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C Helvetica%2C Open Sans%2C sans-serif%2C monospace%3Bfont-size%3A10pt %7D %3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg id%3D"holder_1707e6613b5"%3E%3Crect width%3D"64" height%3D"64" fill%3D"%23EEEEEE"%3E%3C%2Frect%3E%3Cg%3E%3Ctext x%3D"13.458333969116211" y%3D"36.8"%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

const Example = () => {
    return (
        <Media>
            <Media left href="#">
                <Media object src={img} alt="Generic placeholder image" />
            </Media>
            <Media body style={{ paddingLeft: 10 }}>
                <Media heading>
                    Media heading
                </Media>
                <p className="text-justify">
                    Cras sit amet nibh libero, in gravida nulla.
                    Nulla vel metus scelerisque ante sollicitudin commodo.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                </p>
            </Media>
        </Media>
    );
};

export default Example;
