import axios from "axios";
import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";


//actionaNaming

const inc = 'account/increment'
const desc = 'account/decrement'
const incbyamount = 'account/incrementbyamount'
const incBonus = 'bonus/increment'
const descBonus = 'bonus/decrement'
const incrementbyBonus = 'bonus/incrementbybonus'
const initFullfilld = 'amount/getdatafullfiled'
const initPending = 'amount/getdataPending'
const initRejected = 'amount/getdataRejected'


//store
const store = createStore(combineReducers({
    amount: accountReducer,
    bonus: bonusReducer
}), applyMiddleware(logger.default, thunk.default))


//reducer
function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case inc: {
            return { amount: state.amount + 1 }
        }
        case desc: {
            return { amount: state.amount + 1 }
        }
        case incbyamount: {
            return { amount: state.amount + action.payload }
        }
        case initFullfilld: {
            return { amount:action.payload, pending: false }
        }
        case initPending: {
            return { ...state.amount, pending: true }
        }
        case initRejected: {
            return { ...state.amount, pending: false,error:action.payload }
        }

        default:
            return state;

    }


}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incbyamount: {
            if (action.payload > 100) {
                return { points: state.points + 1 }
            } else {
                return state
            }
        }
        case incBonus: {
            return { points: state.points + 1 }
        }
        case descBonus: {
            return { points: state.points - 1 }
        }
        case incrementbyBonus: {
            return { points: state.points + action.payload }
        }
        default:
            return state
    }
}
// const histry=[]

//APi hit

// function getUser(id) {
//     return async (dispatch, getState) => {
//         try {
//             dispatch(InitPending())
//             const { data } = await axios.get(`http://localhost:5000/accounts/${id}`)
//             dispatch(InitFullfilld(data.amount))
//         }catch(err){
//             dispatch(InitRejected(err.message))
//         }
//     }
// }

async function getUser(dispatch,getState){
    try{
        dispatch(InitPending())
        const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch(InitFullfilld(data))
    }catch(err){
        dispatch(InitRejected(err.message))
    }
}


//action creator
function increment() {
    return { type: inc }
}

function InitFullfilld(value) {
    return { type: initFullfilld, payload: value }
}


function decrement() {
    return { type: desc }
}

function incrementbyamount(value) {
    return { type: incbyamount, payload: value }
}

function DescBonus() {
    return { type: descBonus }
}

function IncBonus() {
    return { type: incBonus }
}

function IncrementByBonus(value) {
    return { type: incrementbyBonus, payload: value }
}

function InitPending() {
    return { type: initPending }
}

function InitRejected(error) {
    return { type: initRejected,payload:error }
}



//global state
store.subscribe(() => {
    // histry.push(store.getState())
    //    console.log(histry)
    console.log(store.getState())
})

setTimeout(() => {
    store.dispatch(getUser)
}, 2000)




