import React from 'react';
import styled from 'styled-components';

import HeaderSearchForm from './HeaderSearchForm';
import image from '../assets/images/skyscrapers.png';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 138px;
    width: 100%;
    border-radius: 8px;
    background-image: url('${image}');
    background-position: center center;

    & form {
        width: 65%;
        position: relative;
    }
`;

function HeaderSearch(): JSX.Element {
    return (
        <Wrapper>
            <HeaderSearchForm />
        </Wrapper>
    );
}

export default HeaderSearch;
