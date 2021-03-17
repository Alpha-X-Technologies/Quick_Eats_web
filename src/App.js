import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Orders from './components/Orders/Orders';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch} from 'react-redux';

import {getOrders} from './actions/orders';

const App = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getOrders());
    }, [dispatch]);
    
    return(
        <Container maxidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">QuickEats</Typography>
            </AppBar>
            <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Orders/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
            </Grow>
        </Container>      
    );
}

export default App;