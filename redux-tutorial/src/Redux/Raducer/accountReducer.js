import { inc,desc,incbyamount,initFullfilld,initPending ,initRejected } from "../Actions/action"
import { InitFullfilld,InitPending,InitRejected } from "../Actions/action"
import axios from "axios"

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

export async function getUser(dispatch,getState){
    try{
        dispatch(InitPending())
        const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch(InitFullfilld(data))
    }catch(err){
        dispatch(InitRejected(err.message))
    }
}

export function accountReducer(state = { amount: 1,data:[] }, action) {

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
            return { data:action.payload, pending: false }
        }
        case initPending: {
            return { ...state.data, pending: true }
        }
        case initRejected: {
            return { ...state.data, pending: false,error:action.payload }
        }

        default:
            return state;

    }


}