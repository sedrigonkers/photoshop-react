import React from 'react'
import Tip from '../Tip/Tip'
import './MainImg.css'

function MainImg({ showStartTip, imgRef, dispatch, getImageStyle, mainImg, canvasRef, downloadLinkRef, inputRef }) {
    return (
        <div className='img-container'>

            {showStartTip && <Tip />}

            <div className='img-wrapper' >
                <img
                    ref={imgRef}
                    onLoad={() => dispatch({ type: 'image-loaded' })}
                    style={getImageStyle}
                    src={mainImg.src}
                />
            </div>
            <canvas hidden ref={canvasRef}></canvas>
            <a hidden ref={downloadLinkRef}></a>
            <input
                type="file"
                className="file-input"
                accept="image/*"
                onChange={() => dispatch({ type: 'image-changed' })}
                ref={inputRef}
                hidden
            />
        </div>
    )
}

export default MainImg