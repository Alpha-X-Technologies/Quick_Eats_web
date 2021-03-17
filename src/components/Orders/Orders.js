import React from 'react';
import Order from './Order/Order';
import useStyles from './styles';
import {useSelector} from 'react-redux';


const Orders = () =>{
    const classes = useStyles();
    const orders = useSelector((state)=> state.Orders);

    console.log(orders);
    
    return (
        <>
            <h1>Orders</h1>
            <Order/>
            <Order/>
        </>
    );
}

export default Orders;