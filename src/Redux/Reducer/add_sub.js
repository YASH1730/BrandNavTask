// We can make many files like to separate  the different different reduce according to their action module like this reducer has add and sub number functionalities

// initial value for the state

const initialSate = 0

export const changeNumber = (state = initialSate,action)=>{
    // this switch case will decide which function to be called acc. to the action provided
    switch (action.type) {
        case 'ADDNUM':
            return state + action.payload;    
        case 'SUBNUM':
            return state - 1;    
        default:
            return state // this is must for initialization
    }
    
} 