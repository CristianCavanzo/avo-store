import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Index = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/avo',
        }).then(({ data: { avos } }) => {
            setProductList(avos);
        });
    }, []);
    return (
        <div className="container">
            {productList.map((avo, key) => (
                <div key={`${key}_${avo}`}>
                    <figure>
                        <img src={avo.image} alt={avo.name} />
                    </figure>
                    <h5>{avo.name}</h5>
                    <span>{avo.sku}</span>
                    <p>{avo.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Index;
