import React from 'react'
import './Footer.css'
import Slider from './Slider/Slider'

function Footer({ selectedOption, dispatch, disableButtons }) {
    return (
        <div className="footer">
            <div className="footer-items-wrapper">
                <button className={`footer-button button ${disableButtons && 'disable'}`} onClick={() => dispatch({ type: 'reset-filters' })} title="Reset filters">
                    <img src={"./assets/icons/reset.png"} className="icon" />
                </button>
                <Slider
                    min={selectedOption.range.min}
                    max={selectedOption.range.max}
                    value={selectedOption.value}
                    progress={selectedOption.getProgress()}
                    dispatch={dispatch}
                    disableButtons={disableButtons}
                />
                <div className="footer-file-buttons">
                    <button
                        className={`footer-button button upload ${disableButtons && 'highlight-button'}`}
                        onClick={() => dispatch({ type: 'open-file-explorer' })}
                        title="Choose a photo">
                        <img className="icon" src="./assets/icons/upload.png" />
                    </button>
                    <button
                        className={`footer-button button download ${disableButtons && 'disable'}`}
                        onClick={() => dispatch({ type: 'save-image' })}
                        title="Save edited photo">
                        <img className="icon" src="./assets/icons/download.png" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer