import React from "react"
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from "enzyme"
import Sidebar from "../../../components/journal/Sidebar"
import { startLogout } from "../../../actions/auth"
import { Provider } from "react-redux"
import { startNewNote } from "../../../actions/notes"


jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn()

}))

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()

}))



const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        name: 'Jaco'
    },
    notes:{
        notes:[],
        activeNote: null
    }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={store}>
        <Sidebar/>
    </Provider>
)

describe('Tests in Sidebar', () => {

    test('should show correctly', () => { 
        
        expect(wrapper).toMatchSnapshot()
        
    })

    test('should call startLogout', () => { 
        
        wrapper.find('.btn-outline-light').simulate('click')

        expect(startLogout).toHaveBeenCalled()

    })

    test('should call startLogout', () => { 
        
        wrapper.find('.journal__new-entry').simulate('click')

        expect(startNewNote).toHaveBeenCalled()

    })

})