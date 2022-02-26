import thunk from "redux-thunk"
import configureStore from 'redux-mock-store' //ES6 modules
import { types } from "../../types/types"
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    uid: 'ABC123',
    displayName: 'Jaco'
}

let store = mockStore(initState)

describe('Test in auth action', () => {

    beforeEach(() => {
        store = mockStore(initState)
    })

    test('Login and logout should create action', () => {
        
        const uid = 'ABC123'
        const displayName = 'Jaco'

        const loginAction = login(uid, displayName)
        const logoutAction = logout()

    
        expect(loginAction).toEqual({
            type: types.login,
            payload: { uid, displayName }
        })

        expect(logoutAction).toEqual({type: types.logout})

    })

    test('Should do start logout', async() => {
        
        await store.dispatch(startLogout())

        const actions = store.getActions()

        expect(actions[0].type).toBe(types.logout)
        expect(actions[1].type).toBe(types.notesLogoutCleaning)

    })

    test('should do startLoginEmailPassword', async() => {

        await store.dispatch(startLoginEmailPassword('testing@testing.com', '123456'))

        const actions = store.getActions()

        expect(actions[1].type).toBe(types.login)
        expect(actions[1].payload).toEqual({
            uid: 'DsH2PENKrFTyF7xRp49DL6ddBGz1', 
            displayName: null
        })

    })

}) 