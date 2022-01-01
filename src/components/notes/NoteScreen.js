import React from 'react'
import NoteAppBar from './NoteAppBar'

const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NoteAppBar />
            <div className="notes__content">
                    <input type="text" placeholder='Some awesome title' className='notes__title--input' autoComplete='off' />
                    <textarea placeholder='What happened today' className='notes__title--textarea' autoComplete='off' ></textarea>
                    
                    <div className="notes__image">
                        <img src="https://cutt.ly/qUAJKZd" alt="Los simpsons" />
                    </div>
            </div>
        </div>
    )
}

export default NoteScreen
