import axios from 'axios';

const url = 'http://localhost:4000/orders';

export const fetchOrders = () => axios.get(url);