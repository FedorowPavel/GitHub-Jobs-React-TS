import styled, { StyledComponent, MyTheme } from 'styled-components'

const Button: StyledComponent<'button', { theme: MyTheme }> = styled.button`
    height: 48px;
    width: 146px;
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    border-radius: 4px;
    background-color:  ${(props) => props.theme.primaryColor};
    border: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.primaryColorHover};
    }
`

export default Button
