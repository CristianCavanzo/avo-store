import { AvoSvg } from '@components/Svgs/Avo';
import Canasta from '@components/Svgs/Canasta';
import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.header`
    background: #fff;
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
`;

const Header = () => {
    return (
        <HeaderComponent>
            <HeaderContainer>
                <div className="center">
                    <AvoSvg size="42px" />
                    <h5 className="avo">Avo store</h5>
                </div>
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
