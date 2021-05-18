import styled from 'styled-components';

const InputSearch = styled.input`
    height: 56px;
    border: none;
    border-radius: 4px;
    padding-right: -160px;
    border: 2px solid white;
    width: 100%;
    padding-left: 18px;
    font-size: 14px;
    &:focus {
        outline: none;
        border: 2px solid ${(props) => props.theme.primaryColor};
    }
`;

export default InputSearch;
