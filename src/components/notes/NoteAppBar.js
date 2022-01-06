import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'
import moment from 'moment'

const NoteAppBar = () => {


    const dispatch = useDispatch()
    const {active:note} = useSelector(state => state.notes)

    const noteDate = new moment(note.date)

    const {active} = useSelector(state => state.notes)

    const handleSave = () => {
        dispatch(startSaveNote(active))
    }

    const handlePictureClick = () => {

        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {

        const file = e.target.files[0]

        if(file){
            dispatch(startUploading(file))
        }

    }
    
    return (
        <div className='notes__appbar pt-3'>
            <span>{noteDate.format('MMM Do YYYY')}</span>

            <input id='fileSelector' name='file' type="file" style={{display: 'none'}} onChange={handleFileChange}/>

            <div className='notes__appbar--buttons'>
                <button className='btn btn-outline-light me-1' onClick={handlePictureClick}>
                    Picture
                </button>

                <button className='btn btn-outline-light ms-1' onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NoteAppBar
