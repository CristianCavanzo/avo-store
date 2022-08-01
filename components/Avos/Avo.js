import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 58px);
    align-items: center;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        margin: 8px auto;
        row-gap: 8px;
        height: auto;
        width: 90%;
    }
`;

const Breadcrumbs = styled.div`
    color: #56585e;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    column-gap: 8px;
    span {
        color: #72757d;
    }
`;

const AvoName = styled.h4`
    font-size: 32px;
    font-weight: 900;
`;

const Price = styled.div`
    p {
        font-size: 20px;
        display: inline-flex;
        margin-right: 8px;
    }
    span {
        font-size: 12px;
        display: inline-flex;
    }
`;

const Characteristic = styled.p`
    font-size: 14px;
`;

const Quantity = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    column-gap: 20px;
    box-sizing: border-box;
    button {
        background: #006a62;
        border: none;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        border-radius: 4px;
    }
    button,
    input {
        padding: 4px 0;
        font-size: 20px;
    }
    input {
        text-align: center;
    }
    input:disabled {
        color: #000;
        background: transparent;
        border: 2px solid #000;
        border-radius: 4px;
    }
    @media (max-width: 400px) {
        grid-template-columns: 14fr 1fr 14fr;
        column-gap: 8px;
        input {
            width: 210px;
        }
    }
`;

const Button = styled.button`
    width: 100%;
    background: #006a62;
    border: hidden;
    color: #fff;
    border-radius: 4px;
    padding: 12px 0;
    font-size: 16px;
    cursor: pointer;
`;

const Avocado = () => {
    return (
        <Section className="max_width">
            <article>
                <div>
                    <Breadcrumbs>
                        Avocados <span>/</span> Maluma Hasas Avocado
                    </Breadcrumbs>
                    <AvoName>Maluma Hasas Avocado</AvoName>
                    <Price>
                        <p>$1.25</p>
                        <span>per unit</span>
                    </Price>
                </div>
                <Characteristic>
                    Maluma Hasas Avocado is a great choice for anyone who
                </Characteristic>
                <Quantity>
                    <button>-</button>
                    <input type="text" disabled={true} value={1} />
                    <button>+</button>
                </Quantity>
                <Button>Añadir al carro</Button>
            </article>
            <article className="right">
                <figure>
                    <img src="/images/maluma.jpg" alt="" />
                </figure>
            </article>
            <style jsx>
                {`
                     {
                        article {
                            display: grid;
                            row-gap: 24px;
                        }
                        .right figure {
                            width: 100%;
                            display: flex;
                            justify-content: center;
                        }
                        .right figure img {
                            width: 100%;
                            max-width: 400px;
                        }
                        @media (max-width: 400px) {
                            .right figure img {
                                max-width: 300px;
                            }
                        }
                    }
                `}
            </style>
        </Section>
    );
};

export { Avocado };
