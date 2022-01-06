import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { activeNote, startDeleating } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import NoteAppBar from './NoteAppBar'

const NoteScreen = () => {

    const dispatch = useDispatch()

    const {active:note} = useSelector(state => state.notes)
    const {formValues, handleInputChange, resetForm} = useForm(note)
    const {body, title} = formValues

    const activeId = useRef(note.id)
      
    useEffect(() => {
        
        if(note.id !== activeId.current){
            resetForm(note)
            activeId.current = note.id
        }
        
    }, [note, resetForm])

    useEffect(() => {

        dispatch(activeNote(formValues.id, {...formValues}))

    }, [formValues])

    const handleDelete = () => {
        dispatch(startDeleating(note.id))
    }
    

    return (
        <div className='notes__main-content animate__animated animate__fadeIn animate__faster'>
            <NoteAppBar />
            <div className="notes__content">
                    <input type="text" placeholder='Some awesome title' className='notes__title--input' autoComplete='off' name='title' onChange={handleInputChange} value={title} />
                    <textarea placeholder='What happened today' className='notes__title--textarea' autoComplete='off' name='body' onChange={handleInputChange} value={body} ></textarea>
                    
                    {
                        note.url &&
                        <div className="notes__image ">
                            <img src={note.url} alt="Los simpsons" />
                        </div>
                    }
                    
                    
            </div>
            <button onClick={handleDelete} className=' btn btn-danger' style={{fontWeight: 'bold', borderRadius: '0'}}>
                        Delete
            </button>
        </div>
    )
}

export default NoteScreen
