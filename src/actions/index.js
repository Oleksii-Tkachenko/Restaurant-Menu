const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const menuFilter = (filter) => {
    return {
        type: 'MENU_FILTER',
        filter: filter
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    menuFilter
};