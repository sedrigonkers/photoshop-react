import React from 'react'

function SidebarButton({ property, active, name, handleClick }) {
    return (
        
        <button
            className={`sidebar-item ${active ? 'active' : ''}`}
            onClick={handleClick}
        >
            <img className="icon" src={`./icons/${name.toLowerCase()}.png`} title={name} />
        </button>
    )
}

export default SidebarButton