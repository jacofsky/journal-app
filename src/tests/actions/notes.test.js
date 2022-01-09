import { startNewNote } from "../../actions/notes"
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk"
import { types } from "../../types/types"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({
    auth: {
        uid: 'TESTING',
    }
})

describe('Test in notes.test.js', () => {
    
    test('should startNewNote', async() => {
        await store.dispatch(startNewNote())

        const actions= store.getActions();
        console.log(actions)

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
    

})
