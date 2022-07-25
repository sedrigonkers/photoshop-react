import React, { useState } from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton'

function Sidebar({ options,
    selectedOptionIndex,
    setSelectedOptionIndex,
    setDefaultOptions,
    setMainImg }) {

    const inputRef = React.createRef()

    function openFileExplorer() {
        inputRef.current.click()
    }

    function loadImage() {
        const file = inputRef.current.files[0]
        if (!file) return
        setMainImg(URL.createObjectURL(file))
    }

    return (
        <div className="sidebar">
            <div className='sidebar-items'>

                {options.map((option, index) => {
                    return (
                        <SidebarButton
                            key={index}
                            name={option.name}
                            property={option.property}
                            active={selectedOptionIndex === index}
                            handleClick={() => setSelectedOptionIndex(index)}
                        />
                    )
                }
                )}

                <div>
                    <input
                        onChange={loadImage}
                        ref={inputRef}
                        type="file"
                        className="file-input"
                        accept="image/*"
                        hidden
                    />
                    <button className="sidebar-item" onClick={openFileExplorer}>
                        open image
                    </button>
                    <button className="sidebar-item">
                        download image
                    </button>
                </div>

            </div>

            <button className="sidebar-item reset" onClick={setDefaultOptions} title={'Reset filters'}>
                <img src={"./icons/reset.png"} className="icon" />
            </button>

        </div>
    )
}

export default Sidebar