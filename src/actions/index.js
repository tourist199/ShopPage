import * as types from './../constants/actionType'

export const actChangeFilterCategory = (filter) => ({
    type: types.CHANGE_FILTER,
    filter
})

export const actAddToCart = (item) => ({
    type: types.ADD_TO_CART,
    item
})

export const actDeleteCartItem = (item) => ({
    type: types.DELETE_CART_ITEM,
    item
})

export const actChangeQuantityCartItem = (item,value) => ({
    type: types.CHANGE_QUANTITY_CART_ITEM,
    item,
    value
})