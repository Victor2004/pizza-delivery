import React, { useState, useEffect } from 'react';

export interface Menu {
    ProductID: number;
    ProductName: string;
    ProductTypeID: number;
    Price: number;
}

// const getCatsFromServer = async (): Promise<Array<Menu>> => {
//     const resp = await fetch('');
//     const data = await resp.json() as Array<Menu>;
//     return data;
// }

export function GetMenu() {

    const [products, setProducts] = useState<Array<Menu>>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/pizza')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    
    return (products);
}
