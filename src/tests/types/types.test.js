import { types } from "../../types/types"



describe('Tests in types', () => {
    test('should types object be equal', () => {
        expect(types).toEqual({

            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
        
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesAddNew: '[Notes] New Note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Update note saved',
            notesFileUrl: '[Notes] Update image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
            
        })
    })
    
})
