import React from "react"
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import NoteScreen from "../../../components/notes/NoteScreen"

import { mount } from "enzyme"
import { Provider } from "react-redux"
import { activeNote } from "../../../actions/notes"



jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()

}))



const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        uid: '1',
        name: 'Jaco'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes:{
        active: {
            id: 1234,
            title: 'Hola',
            body: 'mundo',
            date: 1
        },
        notes:[]
    }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen/>
    </Provider>
)


describe('Test in <NoteScreen />', () => { 
    
    test('should show snapshot', () => { 
        expect(wrapper).toMatchSnapshot()    
    })

    test('should shout activeNote', () => { 
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        })

        expect(activeNote).toHaveBeenLastCalledWith( 
            1234, 
            {
                id: 1234,
                title: 'Hola de nuevo',
                body: 'mundo',
                date: 1
            }
        )
     })

})