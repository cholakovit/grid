import { combineReducers } from "redux"
import selectorCrypto from './selectorCrypto'

const allReducers = combineReducers({
    watchCrypto: selectorCrypto
})

export default allReducers