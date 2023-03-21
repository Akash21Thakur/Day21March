import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;

    
`

export const NoSearchImageContainer = styled.img`
    width:250px;
        height: 250px;
`

export const TryDiffContainer= styled.div`
    padding-top: 30px;
`

export const NoSearchRes = styled.div`
    padding-top: 30px;
    font-size: 30px;
    font-weight: bold;
`

export const RetryButton = styled.button`
        margin-top: 15px;
    width: 100px;
    padding: 10px;
    font-weight: bold;
    background-color: #4d4ddf;
    border: none;
    color: white;
    cursor: pointer;
`