import { AvoSvg } from '@components/Svgs/Avo';
import Canasta from '@components/Svgs/Canasta';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.header`
    background: var(--background);
    padding: 8px 16px;
    display: flex;
    justify-content: center;
`;
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    * {
        color: #000;
        text-decoration: none;
    }
`;

const Header = () => {
    return (
        <HeaderComponent>
            <HeaderContainer>
                <Link href="/">
                    <a>
                        <div className="center">
                            <AvoSvg size="42px" />
                            <h5 className="avo">Avo store</h5>
                        </div>
                    </a>
                </Link>
                <div className="center">
                    <Canasta />
                    <p>Canasta (0)</p>
                </div>
                <style jsx>{`
                     {
                        div,
                        p {
                            cursor: pointer;
                        }
                        .avo {
                            font-size: 16px;
                            font-weight: 400;
                        }
                    }
                `}</style>
            </HeaderContainer>
        </HeaderComponent>
    );
};

export { Header };
