import styled from "styled-components";

export const VideoCardMainDiv= styled.div`
    display: flex;
    width:320px;
    height:300px;
    flex-direction: column;
    margin-bottom:30px;
    margin-right: 14px;
    padding: 15px;
    padding-left: 0px;
    text-decoration: none;

    @media (max-width: 576px) {
    /* flex-direction: column; */
    width:250px;
    height: auto;
  }
`

export const ThumbnailDiv = styled.img`
    
`

export const VideoDescription= styled.div`
    display: flex;
    flex-direction: row;
    padding-top:20px;
    align-items: flex-start;
    height:100%;
    img{
        width:40px;
        margin-right:12px;
    }

    
`
export const ChannelIcon = styled.img`
    
`

export const VideoChannelDetails= styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    justify-content: space-between;
`

export const VideoTitle= styled.div`
    @media (max-width: 576px) {
    /* flex-direction: column; */
    margin-bottom: 6px;
  }
`

export const ViewsAndDateDiv = styled.div`
    display: flex;
    justify-content: space-between;
`