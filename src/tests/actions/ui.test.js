import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types"

describe('Tests in ui-actions', () => {
    
    test('should functions be created', () => {
        
        const action = setError('ERROR')

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'ERROR'
        })

        expect(removeError()).toEqual({
            type: types.uiRemoveError
        })

        expect(startLoading()).toEqual({
            type: types.uiStartLoading
        })

        expect(finishLoading()).toEqual({
            type: types.uiFinishLoading
        })

    })
    
})
