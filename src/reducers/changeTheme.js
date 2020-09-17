
const changeThemeReducer = (state = {theme:'dark-mode'}, action ) =>{
    
    switch (action.type)
    {
        case 'CHANGE_THEME':
        {
            const newTheme = {
                theme: action.payload
            }
            return newTheme;
        }
        
        default:
            return state;
    }
}

export default changeThemeReducer;