import React, { createRef, useState, useEffect } from 'react'

function Slider({ min, max, value, handleChange, progress }) {

    const inputRef = createRef()
    const [sliderProgress, setSliderProgress] = useState(progress);

    useEffect(() => {
        setSliderProgress(progress)
    }, [progress])

    return (
        <div ref={inputRef} className="slider-container">
            <span className="progress">{sliderProgress}</span>
            <input
                type="range"
                orient="vertical"
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