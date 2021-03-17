import * as api from '../api';

//action Creators - functions that return functions

export const getOrders = () => async(dispatch) => {

    try{
        const {data} = await api.fetchOrders(); //data represents the orders

        dispatch({ type: 'FETCH_ALL', payload : data}); //used by redux thunk
    }catch(error){
        console.log(error.message);
    }
}