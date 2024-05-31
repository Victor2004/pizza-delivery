import React from 'react';
import '../styles/MenuContainers.css';
import { GetMenu } from './ConnectDB'
// import { ModalEdit, EditProduct, DeleteProduct, AddProduct } from './EditMenu';
import { DeleteButton, ModalEdit } from './EditMenu';

function MenuContainers(props: { id: number, name: string, price: number }) {
    const { id, name, price } = props;
    return (
        <div className="pizza-container">
            <img src="https://static.dodomino.ru/images/6212-537-pepperoni-at-20-sm-600.png" alt="Pizza image" className="pizza-image" />
            <div className="pizza-info">
                <h2>{name}</h2>
                <p>Цена: {price} руб.</p>
                <ModalEdit />
                <DeleteButton id={id} />
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
                    <MenuContainers id={product.ProductID} name={product.ProductName} price={product.Price} />
                ))}
            </div>
        </>
    )
}