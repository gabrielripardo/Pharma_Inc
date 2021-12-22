import {createStore, combineReducers } from 'redux'

//Action Types and action creators
const INCREMENT = 'INCREMENT'
const increment = () => ({
    type: INCREMENT
})

const DECREMENT = 'DECREMENT'
const decrement = () => ({
    type: DECREMENT
})

//Reducer contador
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
const ITEMS_REQUESTED = 'ITEMS_REQUESTED'
const request = () => ({
    type: ITEMS_REQUESTED
})

const ITEMS_RECEIVED = 'ITEMS_RECEIVED'
const received = () => ({
    type: ITEMS_RECEIVED
})

//Reducer requisição
function reqRespReducer (state = "", action)
{
    switch (action.type) {
        case ITEMS_REQUESTED:
            return { ...state, itemsRequested: true }
        case ITEMS_RECEIVED:
            return { ...state, itemsRequested: false, items: action.items }
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    cont: counterReducer,
    reqResp: reqRespReducer
}))

console.log("## Redux ##")
console.log(store.getState())
// store.dispatch(increment())
// console.log(store.getState())

export { store, decrement, increment }