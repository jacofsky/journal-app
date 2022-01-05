import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <aside className='journal__sidebar pt-3'>
            <div className="journal__sidebar-navbar">
                <h3 className='fw-lighter'>
                    <i className="bi bi-moon-fill"></i>
                    <span> JacoS</span>
                </h3>

                <button className='btn btn-outline-light' onClick={handleLogout}>
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
