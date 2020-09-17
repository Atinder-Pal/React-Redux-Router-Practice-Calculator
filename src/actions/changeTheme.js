
const toggleTheme = (theme) => {
    return{
        type: 'CHANGE_THEME',
        payload: theme
    };
}
export { toggleTheme };