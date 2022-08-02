import React from 'react'

function SidebarButton({ active, name, handleClick }) {
    return (
        <button
            className={`sidebar-item button ${active ? 'active' : ''}`}
            onClick={handleClick}
            title={name}
        >
            <img className="icon" src={`./icons/${name.toLowerCase()}.png`} />
        </button>
    )
}

export default SidebarButton