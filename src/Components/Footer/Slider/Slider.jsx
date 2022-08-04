import React, { createRef } from 'react'
import './Slider.css'

function Slider({ min, max, value, progress, dispatch, disableButtons }) {

    const inputRef = createRef()

    return (
        <div ref={inputRef} className={`slider-container ${disableButtons ? 'disable' : ''}`}>
            <label className="progress">{progress}</label>
            <input
                type="range"
                step={0.02}
                className="slider"
                min={min}
                max={max}
                value={value}
                onChange={(e) => dispatch({ type: 'handle-slider-change', payload: { value: Number(e.target.value) } })}
            />
        </div>
    )
}

export default Slider