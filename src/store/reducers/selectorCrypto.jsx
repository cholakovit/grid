
const initialState = []

const selectorCryptoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT':
            state.push(action.payload)
            return state
        default:
            return state
    }
}

export default selectorCryptoReducer