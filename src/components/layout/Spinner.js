import React from 'react';
import spinner from "./eclipse-loader.gif"

export default() => {
    return (
        <div>
            <img
                src={spinner}
                alt="spinner"
                style={{
                width: '200px',
                margin: ' 40px auto',
                display: 'block'
            }}/>
        </div>
    );
}
