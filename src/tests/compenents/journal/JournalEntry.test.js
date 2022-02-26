import React from "react"
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import JournalEntry from "../../../components/journal/JournalEntry"

import { mount } from "enzyme"
import { Provider } from "react-redux"
import { activeNote } from "../../../actions/notes"



jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()

}))



const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)
store.dispatch = jest.fn()

const nota = {
    id: 10,
    date: 1,
    title: 'Hola',
    body: 'Mundo',
    url: 'https://algunlugar.com/foto.jpg'
}

const wrapper = mount(
    <Provider store={store}>
        <JournalEntry {...nota}/>
    </Provider>
)

describe('Test in <JournalEntry />', () => {

    test('should show snapshot', () => { 

        expect(wrapper).toMatchSnapshot()

    })

    test('should active note', () => { 

        wrapper.find('.journal__entry').simulate('click')

        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(nota.id, {...nota})
        )

    })

})