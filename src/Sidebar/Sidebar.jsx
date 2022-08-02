import React, { useState } from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton'

function Sidebar({ options, selectedOptionIndex, setSelectedOptionIndex}) {
    return (
        <div className="sidebar">
            <div className='sidebar-items-wrapper'>

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

                </div>
            </div>
        </div>
    )
}

export default Sidebar