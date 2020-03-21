

import React from 'react';
import { Button } from 'reactstrap';

const imgStyle: CSSProperties = {
    width: '100%'
}

const inputStyle: CSSProperties = {
    display: 'none'
}

interface InputImageProps {
    src: String,
    onChange: (value: any) => void
}

class InputImage extends React.PureComponent<InputImageProps> {

    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    input: HTMLInputElement

    onClick(e: React.MouseEvent<HTMLImageElement>) {
        e.preventDefault();
        this.input.click();
    }

    onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (this.input.files && this.input.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
                var imgSrc = e.target.result;
                var image = new Image();
                let size = 480;
                image.onload = () => {
                    var canvas = this.canvas;
                    var ctx = canvas.getContext('2d');

                    let { width, height } = image;

                    if (width > height) {
                        width = width / height * size;
                        height = size;

                        var left = (width - height) / 2;

                        canvas.width = height;
                        canvas.height = height;
                        ctx.drawImage(image, -left, 0, width, height);
                    } else {
                        height = height / width * size;
                        width = size;

                        var top = (height - width) / 2;

                        canvas.width = width;
                        canvas.height = width;
                        ctx.drawImage(image, 0, -top, width, height);
                    }
                    var result = canvas.toDataURL();
                    this.props.onChange(result);
                }
                image.src = imgSrc;
            }

            reader.readAsDataURL(this.input.files[0]);
        }
    }

    render() {
        return (
            <>
                <input
                    onChange={this.onInputChange}
                    style={inputStyle} type='file'
                    ref={ref => this.input = ref} />
                <canvas
                    style={inputStyle}
                    ref={ref => this.canvas = ref} />
                {this.props.src ? (
                    <img
                        onClick={this.onClick}
                        src={this.props.src}
                        style={imgStyle}
                        className="rounded" alt="Cinque Terre" />
                ) : (
                        <Button onClick={this.onClick} color='primary'>Select</Button>
                    )}
            </>
        )
    }
}

export default InputImage;