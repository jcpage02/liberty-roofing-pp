const initialState = {
    isLoggedIn: false
}

const IS_LOGGED_IN = 'IS_LOGGED_IN'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOGGED_IN: 
        Object.assign({}, state, {isLoggedIn: action.payload})

        default: return state
    }
}

export function updateIsLoggedIn(isLoggedIn) {
    return {
        type: IS_LOGGED_IN,
        payload: isLoggedIn
    }
}

export default reducer