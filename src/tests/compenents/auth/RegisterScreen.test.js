import React from "react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from "enzyme"
import RegisterScreen from "../../../components/auth/RegisterScreen"
import { types } from "../../../types/types"



const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {

    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
}

let store = mockStore(initState)

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
)

describe('Tests in RegisterScreen', () => {


    test('should match snapshot', () => {

        expect(wrapper).toMatchSnapshot()
    
    })

    test('should do dispatch of the respective action', () => { 

        const emailField = wrapper.find('input[name="email"]')

        emailField.simulate('change', {
            target: {
                value: '', 
                name: 'email'
            }
        })

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        const actions = store.getActions()

        expect(actions[0].type).toBe(types.uiRemoveError)
    })

    test('should show error message', () => { 
        
        const initState = {

            auth: {},
            ui: {
                loading: false,
                msgError: 'Email no es correcto'
            }
        }
        
        const store = mockStore(initState)
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        )

        expect(wrapper.find(".auth__alert-error").exists()).toBe(true)
        expect(wrapper.find(".auth__alert-error").text().trim()).toBe(initState.ui.msgError)

     })



})