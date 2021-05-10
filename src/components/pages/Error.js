import React from "react";
import data from '../../data'

export default function Error() {
    let {error} = data.images
    
    return (
        <div
            style={{
                height: '100vh',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <img src={error.img_1} alt="ufo" style={{ width: "30vw" }} />
            <p style={{ fontSize: "5vw" }}>Nothing exist hear</p>
        </div>
    );
}
