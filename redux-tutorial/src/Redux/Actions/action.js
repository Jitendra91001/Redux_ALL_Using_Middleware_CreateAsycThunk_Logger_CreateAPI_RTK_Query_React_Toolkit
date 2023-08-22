


export const inc = 'account/increment'
export const desc = 'account/decrement'
export const incbyamount = 'account/incrementbyamount'
export const incBonus = 'bonus/increment'
export const descBonus = 'bonus/decrement'
export const incrementbyBonus = 'bonus/incrementbybonus'
export const initFullfilld = 'amount/getdatafullfiled'
export const initPending = 'amount/getdataPending'
export const initRejected = 'amount/getdataRejected'



//action creator
export function increment() {
    return { type: inc }
}

export function InitFullfilld(value) {
    return { type: initFullfilld, payload: value }
}


export function decrement() {
    return { type: desc }
}

export function incrementbyamount(value) {
    return { type: incbyamount, payload: value }
}

export function DescBonus() {
    return { type: descBonus }
}

export function IncBonus() {
    return { type: incBonus }
}

export function IncrementByBonus(value) {
    return { type: incrementbyBonus, payload: value }
}

export function InitPending() {
    return { type: initPending }
}

export function InitRejected(error) {
    return { type: initRejected,payload:error }
}
