import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"



describe('Tests in authReducer', () => {

    const initialState = {
        uid: '111',
        name: 'aaa'
    }

    test('should return uid and displayname', () => {
        
        const action = {
            type: types.login,
            payload: {
                uid: '123abc',
                displayName: 'Jaco'
            }
        }
        
        const user = authReducer(initialState ,action)
        
        expect(user).toEqual({uid: '123abc', name: 'Jaco'})
    })

    test('should return {}', () => {
        
        const user = authReducer(initialState, {type: types.logout})

        expect(user).toEqual({})
    })

    test('should return default state', () => {
        
        const user = authReducer(initialState, {type: false})

        expect(user).toEqual(initialState)
    })
    
    
})
