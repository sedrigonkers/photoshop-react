import React from 'react'

function SidebarButton({ active, name, disableButtons, index, dispatch, icon}) {
    return (
        <button
            className={`sidebar-item ${disableButtons && 'disable'} ${!disableButtons && active && 'active'}`}
            onClick={() => dispatch({type: 'set-selected-option', payload: {index: index}})}
            title={name}
        >
            <img className="icon" src={icon} />
        </button>
    )
}

export default SidebarButton