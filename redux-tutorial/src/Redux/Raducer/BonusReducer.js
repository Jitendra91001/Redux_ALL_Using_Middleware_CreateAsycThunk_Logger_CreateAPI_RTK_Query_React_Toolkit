import { incBonus,incbyamount,descBonus,incrementbyBonus } from "../Actions/action"

 export function bonusReducer(state = { points: 0 }, action) {
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