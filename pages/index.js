import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Main } from '@components/Generals/Main';
import { Card } from '@components/Avos/Card';

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
        <React.Fragment>
            <Main />
            <section className="container">
                {productList.map((avo, key) => (
                    <Card
                        key={`${key}_${avo}`}
                        image={avo.image}
                        name={avo.name}
                        price={avo.price}
                        id={avo.id}
                    />
                ))}
            </section>
            <style jsx>{`
                 {
                    .container {
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(
                            auto-fit,
                            minmax(280px, 1fr)
                        );
                        grid-gap: 16px;
                        place-self: center;
                        place-items: center;
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    @media (max-width: 425px) {
                        .container {
                            padding: 0 16px;
                        }
                    }
                }
            `}</style>
        </React.Fragment>
    );
};

export default Index;
