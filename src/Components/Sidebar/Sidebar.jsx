import React, { useState } from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton'

function Sidebar({ options, selectedOptionIndex, setSelectedOptionIndex, switchDisable}) {
    return (
        <div className="sidebar ">
            <div className='sidebar-items-wrappere'>

                {options.map((option, index) => {
                    return (
                        <SidebarButton
                            key={index}
                            name={option.name}
                            property={option.property}
                            active={selectedOptionIndex === index}
                            handleClick={() => setSelectedOptionIndex(index)}
                            switchDisable={switchDisable}
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