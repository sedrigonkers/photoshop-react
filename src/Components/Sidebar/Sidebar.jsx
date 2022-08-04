import React from 'react'
import SidebarButton from './SidebarButton'
import './Sidebar.css'

function Sidebar({ options, selectedOptionIndex, dispatch, disableButtons}) {
    return (
        <div className="sidebar ">
            <div className='sidebar-items-wrappere'>

                {options.map((option, index) => {
                    return (
                        <SidebarButton
                            key={index}
                            index={index}
                            name={option.name}
                            property={option.property}
                            active={selectedOptionIndex === index}
                            dispatch={dispatch}
                            disableButtons={disableButtons}
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