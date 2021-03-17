//a function that accepts the state and the action. then based on the action it does something
//orders is a state
export default (orders = [], action) => {
    //choosing a switch because program might expand in the future
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        default:
            return orders;
    }
}