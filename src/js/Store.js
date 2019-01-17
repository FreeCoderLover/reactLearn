import React from 'react';
import store from '../store/index.js';
import {addToCart} from '../store/actions/cart-actions';


class Store extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let unsubscribe = store.subscribe(() =>
            console.log(store.getState())
        );
    
        store.dispatch(addToCart('Coffee 500gm', 1, 250));
        store.dispatch(addToCart('Flour 1kg', 2, 110));
        store.dispatch(addToCart('Juice 2L', 1, 250));
        console.log('store=======', store)
        // console.log('store=======', store.getState())
    
        // unsubscribe(); 
    }

    render(){
        return (
            <div>
                关于Redux状态管理
            </div>
        )
    }
}

export default Store;