import Cart from '@components/Svgs/Cart';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Avo = styled.article`
    width: 100%;
    border-radius: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 16px;
    transition: box-shadow 0.3s ease-in;
    box-shadow: 0 0px 7px 1px #0000004a;

    figure {
        width: 90%;
        align-self: center;
    }
    figure img {
        width: 100%;
    }
    figure,
    div {
        cursor: pointer;
    }
    * {
        text-decoration: none;
        color: #000;
    }
    :hover {
        box-shadow: -0.6px -0.6px 2.2px rgba(0, 0, 0, 0.02),
            -0.3px -0.3px 5.3px rgba(0, 0, 0, 0.028),
            1.2px 1.2px 10px rgba(0, 0, 0, 0.035),
            4.7px 4.7px 17.9px rgba(0, 0, 0, 0.042),
            11.6px 11.6px 33.4px rgba(0, 0, 0, 0.05),
            29px 29px 80px rgba(0, 0, 0, 0.07);

        transition: box-shadow 0.2s ease-in;
    }
`;

const ButtonCart = styled.button`
    background: transparent;
    cursor: pointer;
    border: 2px solid #006a62;
    padding: 4px;
    border-radius: 2px;
    svg {
        fill: #006a62;
    }
    :hover {
        background: #006a62;
        svg {
            fill: #fff;
        }
    }
`;

const Card = ({ image, name, price, id, ...otherProps }) => {
    let link = `/avo/${id}`;
    return (
        <Avo {...otherProps}>
            <Link href={link}>
                <a>
                    <figure>
                        <img src={image} alt={name} />
                    </figure>
                </a>
            </Link>
            <div className="d_flex justify-content-beetween align-items-center">
                <Link href={link}>
                    <a>
                        <div>
                            <h5>{name}</h5>
                            <p>${price}</p>
                        </div>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <ButtonCart className="d_grid center">
                            <Cart size="20px" color="blue" />
                        </ButtonCart>
                    </a>
                </Link>
            </div>
        </Avo>
    );
};

export { Card };
