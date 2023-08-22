import { inc,desc,incbyamount,initFullfilld,initPending ,initRejected } from "../Actions/action"


export function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case inc: {
            return { amount: state.amount + 1 }
        }
        case desc: {
            return { amount: state.amount - 1 }
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