import { AvoSvg } from '@components/Svgs/Avo';
import React from 'react';
import styled from 'styled-components';

const MainComponent = styled.main`
    width: 100%;
    display: grid;
    place-items: center;
    margin: 80px 0;
    h3 {
        font-size: 60px;
        display: flex;
        align-items: center;
    }
    @media (max-width: 425px) {
        h3 {
            font-size: 40px;
        }
    }
`;

const Main = () => {
    return (
        <MainComponent>
            <h3>
                Platzi <AvoSvg size="80px" />
                Avo
            </h3>
        </MainComponent>
    );
};

export { Main };
