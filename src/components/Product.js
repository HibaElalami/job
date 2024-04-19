import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, title, img, price } = this.props.product;
        return (
            <ProductWrapper className="col-4 mx-auto my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div
                                style={{ position: 'relative', height: '280px' }}
                                className="img-container p-5"
                                onClick={() => value.handleDetail(id)}
                            >
                                <Link to="/details">
                                    <img
                                        src={require(`./${img}`)} // Update image source
                                        alt="product"
                                        className="card-img-top"
                                        style={{height:"280px",width:"352px",position: 'relative', bottom:"26%",right:"19%"}}
                                    />
                                </Link>
                            </div>
                        )}
                    </ProductConsumer>
                    <div style={{ position: 'relative', height: '50px',backgroundColor:"#B67D48",color:"#ffffff" }} className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="font-italic mb-0">
                            {price} <span className="mr-1">Dh</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
};

const ProductWrapper = styled.div`
    /* Your styling */
`;
