import { combineReducers } from 'redux';
import listProducts from './listProducts'
import listCarts from './listCarts'
import filterCategory from './filterCategory'
const appReducers = combineReducers({
    listProducts,
    listCarts,
    filterCategory
})
export default appReducers;