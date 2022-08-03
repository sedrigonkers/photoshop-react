import React from 'react'
import './Footer.css'
import Slider from './Slider/Slider'

const Footer = ({setDefaultOptions, selectedOption, loadImage, inputRef, openFileExplorer, saveImage, handleSldierChange, switchDisable}) => {
    return (
        <div className="footer">
            <div className="footer-items-wrapper">
                <button className={`footer-button button ${switchDisable()}`} onClick={setDefaultOptions} title="Reset filters">
                    <img src={"./icons/reset.png"} className="icon" />
                </button>
                <Slider
                    min={selectedOption.range.min}
                    max={selectedOption.range.max}
                    value={selectedOption.value}
                    handleChange={handleSldierChange}
                    progress={selectedOption.getProgress()}
                    switchDisable={switchDisable}
                />
                <input
                    onChange={loadImage}
                    ref={inputRef}
                    type="file"
                    className="file-input"
                    accept="image/*"
                    hidden
                />
                <div className="footer-file-buttons">
                    <button className="footer-button button upload" onClick={openFileExplorer} title="Choose a photo"><img className="icon" src="./icons/upload.png" /></button>
                    <button className={`footer-button button download ${switchDisable()}`} onClick={saveImage} title="Save edited photo"><img className="icon" src="./icons/download.png" /></button>
                </div>
            </div>
        </div>
    )
}

export default Footer