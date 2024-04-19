import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <>
                <div style={{ background: '#99D3BB', width: '1000px', height: '420px', left: '10%', top: '105px', position: 'absolute' }}>
                    <ProductConsumer>
                        {value => {
                            const { id, company, img, info, price, title, inCart } = value.detailProduct;
                            return (
                                <div className="container py-5">
                                    <div className="row" style={{ right: '5%', position: 'relative', marginTop: "0px" }}>
                                        <div style={{ bottom: "20px", left: "80px", position: 'relative' }} className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                            <img src={require(`./${img}`)}
                                                className="img-fluid"
                                                alt={title}
                                                style={{ width: '380px', height: "330px", position: 'relative' }} />
                                        </div>
                                        {/* Product text */}
                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" style={{ bottom: "50px", position: 'relative' }}>
                                            <h4 className="mt-3 mb-2" style={{ color: '#447F1C' }}>
                                                <strong style={{ fontSize: '1.2rem' }}> Produit : </strong> <span style={{ color: '#3F514E', fontSize: '1.0rem' }}>{title}</span>
                                            </h4>

                                            <h4 className="mt- mb-0" style={{ color: '#447F1C' }}>
                                                <strong style={{ fontSize: '1.2rem' }}> Fabriqué par : </strong><span style={{ color: '#3F514E', fontSize: '1.0rem' }}>{company}</span>
                                            </h4>
                                            <h4 className="mt-2 mb-0" style={{ color: "#447F1C" }}>

                                                <strong style={{ fontSize: '1.2rem' }}>Prix :</strong><span style={{ color: '#3F514E', fontSize: '1.0rem' }}>{price} DH</span>

                                            </h4>
                                            <h4 className="mt-3 mb-0" style={{ fontSize: '1.2rem', color: "#447F1C" }}>
                                                <strong> Quelques informations sur le produit : </strong>
                                            </h4>
                                            <span style={{ color: '#3F514E', fontSize: '1.00rem', lineHeight: 1.6, marginBottom: ' 0rem' }}>
                                                {info}
                                            </span>
                                            {/* Buttons */}
                                            <div className="mt-3 mb-0">
                                                <Link to="/">
                                                    <ButtonContainer style={{ width: "40%", height: "10%" }}>
                                                        Retour aux produits
                                                    </ButtonContainer>
                                                </Link>
                                                <ButtonContainer style={{ width: "30%", height: "20%" }} cart disabled={inCart ? true : false}
                                                    onClick={() => {
                                                        value.addToCart(id);
                                                        value.openModal(id);
                                                    }}>
                                                    {inCart ? "Existe" : "Ajouter au panier"}
                                                </ButtonContainer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    </ProductConsumer>
                </div>
            </>
        );
    }
}
