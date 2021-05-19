import 'styled-components'

declare module 'styled-components' {
    export interface MyTheme {
        logoTextSize: string;
        primaryColor: string;
        primaryColorHover: string;
    }
}
