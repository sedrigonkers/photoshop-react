import React, { createRef, useState, useEffect } from 'react'
import './Slider.css'

function Slider({ min, max, value, handleChange, progress, switchDisable }) {

    const inputRef = createRef()
    const [sliderProgress, setSliderProgress] = useState(progress);

    useEffect(() => {
        setSliderProgress(progress)
    }, [progress])

    return (
        <div ref={inputRef} className={`slider-container ${switchDisable()}`}>
            <label className="progress">{sliderProgress}</label>
            <input
                type="range"
                step={0.02}
                className="slider"
                value={value}
                min={min}
                max={max}
                onChange={handleChange}
            />
        </div>
    )
}

export default Slider