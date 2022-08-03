import React from 'react'

function SidebarButton({ active, name, handleClick, switchDisable}) {
    return (
        <button
            className={`sidebar-item button ${switchDisable()} ${active ? 'active' : ''}`}
            onClick={handleClick}
            title={name}
        >
            <img className="icon" src={`./icons/${name.toLowerCase()}.png`} />
        </button>
    )
}

export default SidebarButton