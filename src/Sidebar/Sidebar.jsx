import React from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton'

function Sidebar({ options, selectedOptionIndex, setSelectedOptionIndex, setDefaultOptions }) {
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

            </div>

            <button className="sidebar-item reset" onClick={setDefaultOptions} title={'Reset filters'}>
                <img src={"./icons/reset.png"} className="icon" />
            </button>

        </div>
    )
}

export default Sidebar