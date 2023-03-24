import styled from "styled-components"

export const Header = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
background-color: ${({theme}) => theme.background_color};
padding: 30px;
`

export const FireIcon = styled.i`
color:red;
font-size: 30px;
`

export const PageTitle = styled.h1`

`

export const IconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #cbd6d6;
margin-right: 30px;
`