import React from 'react'
import JournalEntries from './JournalEntries'

const Sidebar = () => {
    return (
        <aside className='journal__sidebar pt-3'>
            <div className="journal__sidebar-navbar">
                <h3 className='fw-lighter'>
                    <i className="bi bi-moon-fill"></i>
                    <span> JacoS</span>
                </h3>

                <button className='btn btn-outline-light'>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="bi bi-calendar-plus"></i>
                <p>New entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar
