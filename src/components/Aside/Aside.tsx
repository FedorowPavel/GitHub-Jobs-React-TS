import styled, { MyTheme, StyledComponent } from 'styled-components'

const Aside: StyledComponent<'aside', { theme: MyTheme }> = styled.aside`
 h2 {
   text-transform: uppercase;
   color: ${(props) => props.theme.infoFontColor};
   font-size: ${(props) => props.theme.primaryFontSize}
 }
`

export default Aside
