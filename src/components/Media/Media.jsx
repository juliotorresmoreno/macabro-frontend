import React from 'react';
import { Media as MediaBS } from 'reactstrap';


interface MediaProps {
    title: string;
    content: React.ReactElement;
    img: string
}

const Media = (props: MediaProps) => {
    return (
        <MediaBS>
            {props.img ? (
                <MediaBS left href="#">
                    <MediaBS object src={props.img} style={{ width: 64 }} alt="" />
                </MediaBS>) : false}
            <MediaBS body style={{ paddingLeft: 10 }}>
                <MediaBS heading>
                    {props.title}
                </MediaBS>
                <p className="text-justify">
                    {props.content}
                </p>
            </MediaBS>
        </MediaBS>
    );
};

export default Media;
