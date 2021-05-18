import styled from 'styled-components';

const Button = styled.button`
    background: ${(props) => props.theme.mainBtnBackground};
    border-radius: 3px;
    border: ${(props) => props.theme.bigborder} solid palevioletred;
    color: ${(props) => props.theme.mainBtnColor};
    margin: 0.5em 1em;
    padding: 0.25em 1em;
`;

export default Button;
