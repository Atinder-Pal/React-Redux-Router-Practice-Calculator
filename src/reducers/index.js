import { combineReducers } from 'redux';
import calculationsReducer from './calculations';
import changeThemeReducer from './changeTheme';

export default combineReducers({
    calculationsReducer,
    changeThemeReducer
})