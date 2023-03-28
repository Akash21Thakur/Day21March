import styled from "styled-components"
interface Props{
    isDark: boolean;
}


export const Header = styled.div<Props>`
display: flex;
/* justify-content: center; */
align-items: center;
background-color: ${props => props.isDark ? '#5c5a5a94' : '#e4e4e4ae'};
padding: 30px;
margin-bottom: 18px;

/* .cont-div{
    width:300px;
} */
`

export const FireIcon = styled.i`
color:red;
font-size: 30px;
`

export const PageTitle = styled.h1`
 width:100%;
`

export const IconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
border-radius: 50%;
background-color: ${({ theme }) => theme.background_color};
margin-right: 30px;
`