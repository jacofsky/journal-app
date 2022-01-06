import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

// react-journal

export const startNewNote = () => {
    return async (dispatch, getState) => {
        
        const uid = getState().auth.uid;
        console.log(uid) 

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(collection(db, `${uid}`, "journal/notes"), newNote)

        console.log("Document written with ID: ", doc);

        dispatch(activeNote(doc.id, newNote))
        dispatch(addNetNote(doc.id, newNote))


    
    }
}

export const activeNote = (id, note) => ({

    type: types.notesActive,
    payload: {
        id, 
        ...note
    }

}) 

export const addNetNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = (note) => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid;

        if(!note.url){
            delete note.url
        }

        const noteToFirestore = {...note}
        delete noteToFirestore.id;

        await updateDoc(doc(db, `${uid}/journal/notes/${note.id}`), noteToFirestore)

        dispatch(refreshNote(note.id, noteToFirestore))
        Swal.fire({
            icon: 'success',
            title: 'Saved',
            text: note.title,
            confirmButtonColor: '#5cc5bc'
        })
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = (file) => {
    return async(dispatch, getState) => {

        const {active:activeNote} = getState().notes;

        
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        })
        
        const imgUrl = await fileUpload(file)  
        activeNote.url = imgUrl;
        
        dispatch(startSaveNote(activeNote)) 
        
        
        Swal.close()  
        
        
    }
}

export const startDeleating = (id) => {
    return async(dispatch, getState) => {

        const uid = getState().auth.uid;

        await deleteDoc(doc(db, `${uid}/journal/notes/${id}`))

        dispatch(deleteNote(id))
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const logoutCleaning = () => ({
    type: types.notesLogoutCleaning
})