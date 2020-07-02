const initialState = {
    menu: [],
    loading: true,
    error: false,
    filter: 'all',
    items: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            }
        case 'MENU_FILTER':
            return {
                ...state,
                error: false,
                filter: action.filter
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false
            }
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            }
        case 'ITEM_ADD_TO_CART':
            const newItems = state.items;
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const isAvailable = state.items.find(el => el.id === item.id )
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qty: 1
                }
            
            if (isAvailable) {
                newItems.map(elem => {
                    if (elem.id === isAvailable.id) {
                        elem.qty++;
                    }
                })
            } else {
                newItems.push(newItem)
            }
            return {
                ...state,
                totalPrice: state.totalPrice + newItem.price,
                items: newItems
            }
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['qty'];
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - price
            }
        default:
            return state;
    }
}

export default reducer;

