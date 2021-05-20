import 'styled-components'

declare module 'styled-components' {
    export interface MyTheme {
        logoTextSize: string;
        infoFontColor: string
        primaryFontSize: string;
        primaryTextColor: string,
        primaryColor: string;
        primaryColorHover: string;
    }
}
