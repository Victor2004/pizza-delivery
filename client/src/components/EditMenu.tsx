import React, { useEffect, useState } from "react";
import '../styles/EditMenu.css';

export function ModalEdit() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button className="edit-btn" onClick={toggleModal}>
                <i className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                    </svg>
                </i>
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Редактироватие товара</h2>
                        <form>
                            <label htmlFor="ProductID">ProductID </label>
                            <input type="text" id="ProductID" placeholder="id" />
                        </form>
                        <form>
                            <label htmlFor="ProductName">ProductName </label>
                            <input type="text" id="ProductName" placeholder="Название продукта" />
                        </form>
                        <form>
                            <label htmlFor="Price">Price </label>
                            <input type="text" id="Price" placeholder="Цена" />
                        </form>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

// export function EditProduct() {

// }

export function DeleteButton(props: { id: number }) {
    const { id } = props;
    const [deleted, setDeleted] = useState(false);

    const deleteProduct = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/pizza/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            } else {
                window.location.reload();
            }

            setDeleted(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button className="delete-btn" onClick={deleteProduct}>
                <i className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1.5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1.5-.5M8 5a.5.5 0 0 1.5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg>
                </i>
            </button>
        </>
    )
};

// export function AddProduct() {

// }