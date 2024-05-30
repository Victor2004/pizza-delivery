import React from 'react';
import '../styles/MenuContainers.css';
import { GetMenu } from './ConnectDB'
// import { ModalEdit, EditProduct, DeleteProduct, AddProduct } from './EditMenu';
import { ModalEdit } from './EditMenu';

function MenuContainers(props: { id: number, name: string, price: number }) {
    const { name, price } = props;
    return (
        <div className="pizza-container">
            <img src="https://static.dodomino.ru/images/6212-537-pepperoni-at-20-sm-600.png" alt="Pizza image" className="pizza-image" />
            <div className="pizza-info">
                <h2>{name}</h2>
                <p>Цена: {price} руб.</p>
                <ModalEdit />
                <button className="delete-btn">
                    <i className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                    </i>
                </button>
            </div>
        </div>
    );
}

export default function Menu() {
    let products = GetMenu();
    // alert(products[0].ProductID);
    return (
        <>
            <div className="menu-grid">
                {products.map(product => (
                    <MenuContainers id={1} name={product.ProductName} price={product.Price} />
                ))}
            </div>
        </>
    )
}