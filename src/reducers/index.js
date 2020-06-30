const initialState = {
    menu: [],
    loading: true,
    error: false,
    filter: 'all'
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: false,
                filter: state.filter
            }
        case 'MENU_FILTER':
            return {
                menu: state.menu,
                loading: state.loading,
                error: false,
                filter: action.filter
            }
        case 'MENU_REQUESTED':
            return {
                menu: state.menu,
                loading: true,
                error: false,
                filter: state.filter
            }
        case 'MENU_ERROR':
            return {
                menu: state.menu,
                loading: state.loading,
                error: true,
                filter: state.filter
            }
        default:
            return state;
    }
}

export default reducer;

