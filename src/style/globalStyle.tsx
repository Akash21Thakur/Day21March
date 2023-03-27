import { redirect } from "react-router"
import { createGlobalStyle, DefaultTheme } from "styled-components"

// const theme = GlobalStyle{

// }

declare module 'styled-components' {
    export interface DefaultTheme {
        color: string;
        background_color: string;
    }
}

export const GlobalStyle =  createGlobalStyle `
   *{
    // color: #007579;
    // font-size: 48px
    }
    
    body {
        
        height: 100vh;
        background-color: ${({theme}) => theme.background_color};
        color: ${({theme}) => theme.color}
        
        
    }

    #root{
        height:100%;
    }
`


export const darkTheme: DefaultTheme = {
    color: '#fdfdfd',
    background_color: '#000000',

}

export const lightTheme: DefaultTheme = {
    color: '#000000',
    
    background_color: '#f1f1f1'
}