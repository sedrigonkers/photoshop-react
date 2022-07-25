import React from 'react'

function SidebarButton({ property, active, name, handleClick }) {
    return (
        <button
            className={`sidebar-item ${active ? 'active' : ''}`}
            onClick={handleClick}
            title={name}
        >
            <img className="icon" src={`./icons/${name.toLowerCase()}.png`} />
        </button>
    )
}

export default SidebarButton