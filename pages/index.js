import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Main } from '@components/Generals/Main';
import { Card } from '@components/Avos/Card';
export const getStaticProps = async () => {
    const {
        data: { avos: productList },
    } = await axios({
        method: 'get',
        url: `https://avo-store-six.vercel.app/api/avo`,
    });
    return { props: { productList } };
};

const Index = ({ productList }) => {
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
