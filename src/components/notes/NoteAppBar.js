import React from 'react'

const NoteAppBar = () => {
    return (
        <div className='notes__appbar pt-3'>
            <span>1 enero 2022</span>

            <div className='notes__appbar--buttons'>
                <button className='btn btn-outline-light me-1'>
                    Picture
                </button>

                <button className='btn btn-outline-light ms-1'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NoteAppBar
