
export const initialState = 0;


// action ka jo work hy wo dispatch k andr hota hy
// state means register hy jo jo kam hogay 
// action jo kaam kar raha ho wo hoga
// state ko ruturn karna zarori hy q k current state wohi say aey gi


export const Buttonreducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
