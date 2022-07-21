import React from 'react'
import './MainImage.css'

function MainImage({ getImageStyle }) {
    return (
        <div className="main-image-wrapper">
            <div className="main-image" >
                <img style={getImageStyle()} src={'./me.jpeg'} />
            </div>
        </div>
    )
}

export default MainImage