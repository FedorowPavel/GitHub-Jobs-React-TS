import styled, { StyledComponent, MyTheme } from 'styled-components'

const InputSearch: StyledComponent<'input', { theme: MyTheme }> = styled.input`
    height: 56px;
    border-radius: 4px;
    padding-right: -160px;
    border: 2px solid white;
    width: 100%;
    padding-left: 18px;
    font-size: 14px;
  
    &::placeholder {
      color:${(props) => props.theme.infoFontColor}
    }
  
    &:focus {
        outline: none;
        border: 2px solid ${(props) => props.theme.primaryColor};
    }
`

export default InputSearch
