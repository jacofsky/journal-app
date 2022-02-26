import React from "react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import LoginScreen from "../../../components/auth/LoginScreen"
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from "enzyme"
import { startGoogleLogin, startLoginEmailPassword } from "../../../actions/auth"

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))

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
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
)

describe('Tests in LoginScreen', () => {


    beforeEach(() => {
        store = mockStore(initState)
        jest.clearAllMocks()
    })
    


    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should startGoogleLogin', () => { 
        
        wrapper.find('.btn-outline-secondary').prop('onClick')()

        expect(startGoogleLogin).toHaveBeenCalled()

    })

    test('should handleLogin', () => { 
        
        wrapper.find('form').prop('onSubmit')({preventDefault(){}})

        expect(startLoginEmailPassword).toBeCalledWith('Pablis@gmail.com','123456')

    })


})