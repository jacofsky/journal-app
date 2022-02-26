 /**
 * @jest-environment node
 */

import { startNewNote, startLoadingNotes, startSaveNote, startUploading } from "../../actions/notes"
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk"
import { types } from "../../types/types"
import { deleteDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"
import * as fs from 'fs';
import { fileUpload } from "../../helpers/fileUpload"

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: 'AKZGZvLDxTRyVerwLhHu',
            title: 'Hola',
            body: 'Mundo'
        }
    }
}

let store = mockStore(initState)

global.scrollTo = jest.fn(); 


describe('Test in notes.test.js', () => {

    beforeEach(() => {
        store = mockStore(initState)
    })
    
    test('should startNewNote', async() => {
        await store.dispatch(startNewNote())

        const actions= store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })
        
        deleteDoc(doc(db, `TESTING/journal/notes/${actions[0].payload.id}`))
    })
    
    test('startLoadingNotes should start upload notes', async() => { 

        await store.dispatch(startLoadingNotes('TESTING'))

        const actions = store.getActions()

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        })

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect(actions[0].payload[0]).toMatchObject(expected)

    })

    test('startSaveNotes should start save notes', async() => { 

        const note = {
            id:'AKZGZvLDxTRyVerwLhHu',
            title: 'titulo',
            body: 'body'
        }

        await store.dispatch(startSaveNote(note))

        const actions = store.getActions()

        expect(actions[0].type).toBe(types.notesUpdated)

        const docRef = await getDoc(doc(db, "TESTING", "journal", "notes", `${note.id}`))
        
        expect(docRef.data().title).toBe(note.title)

    })

    test('startUploading should start uploading file', async() => { 

        const urlTest = 'https://hola-mundo.com'

        fileUpload.mockReturnValue(urlTest)
        fs.writeFileSync('foto.jpg', '')
        
        const file = fs.readFileSync('foto.jpg')
        await store.dispatch(startUploading(file))

        const docRef = await getDoc(doc(db, "TESTING", "journal", "notes", 'AKZGZvLDxTRyVerwLhHu'))
        expect(docRef.data().url).toBe(urlTest)

    })

})
