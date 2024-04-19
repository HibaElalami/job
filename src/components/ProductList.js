import React, { Component } from 'react';
import Product from "./Product";
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment >
                <div className="py-5" style={{backgroundColor:"#FFFBEC", height:"900px",width:"100%",position: 'absolute'}}>
                    <div className="container">
                  
                       <div className="row" style={{backgroundColor:"#A5F6D4" ,bottom:'6%', width:'90%',height:'85%',position: 'absolute'}}>
                         <ProductConsumer>
                             {value=>{
                               return value.products.map(product =>{
                                   return <Product key={product.id} product={product} />;
                               });
                             }}
                         </ProductConsumer>
                       </div>
                       </div> 
                    </div>
            </React.Fragment>
        );
    }
}
