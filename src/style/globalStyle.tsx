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
    color: '#a19696',
    background_color: '#2b2727'
}

export const lightTheme: DefaultTheme = {
    color: '#0c0c0b',
    background_color: '#f7f7f7'
}