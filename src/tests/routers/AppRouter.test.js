import React from "react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from "enzyme"
import { login } from "../../actions/auth"
import AppRouter from "../../routers/AppRouter"
import { act } from "react-dom/cjs/react-dom-test-utils.production.min"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"


jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {

    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'ABC'
        },
        notes: []
    }
}

let store = mockStore(initState)
store.dispatch = jest.fn()



describe('Tests in AppRouter', () => {

    test('should call login if i authenticated', async() => { 

        let user;

        await act(async() => {

            const auth = getAuth()
            const userCred = await signInWithEmailAndPassword(auth, 'testing@testing.com', '123456')
            user = userCred.user

            console.log(userCred)

            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            )
        })

        expect(login).toHaveBeenCalledWith('DsH2PENKrFTyF7xRp49DL6ddBGz1', null)
        
    })

})