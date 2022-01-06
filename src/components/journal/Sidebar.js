import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const dispatch = useDispatch()
    const {name} = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleLogAddNew = () => {
        dispatch(startNewNote())
    }

    return (
        <aside className='journal__sidebar pt-3 '>
            <div className="journal__sidebar-navbar animate__animated animate__fadeInLeft">
                <h3 className='fw-lighter'>
                    <i className="bi bi-moon-fill"></i>
                    <span> {name}</span>
                </h3>

                <button className='btn btn-outline-light' onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry animate__animated animate__fadeInLeft" onClick={handleLogAddNew}>
                <i className="bi bi-calendar-plus"></i>
                <p>New entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar
