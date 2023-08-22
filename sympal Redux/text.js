const state={amount:{value:1},bonus:{points:0}}
const NewState={amount:{...state.amount},bonus:state.bonus.points+1}

//deep copy reference
console.log(state,NewState)
state.amount.value=100
console.log(state,NewState)