import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    /* flex-wrap: wrap; */
.channel-details{
    width: 500px;
}
h1{
    font-size: 25px;
}

@media (max-width: 576px) {
      flex-wrap: wrap;
    padding:0px;
    margin-bottom: 40px;

    h1{
        margin-top:4px;
        font-size: 15px;
    }

    .channel-details{
        margin-left: 0px;
    width: 300px;
}
    /* width:100%; */
   }
`

export const ImageContainer = styled.img`
    width: 350px;
    height: 200px;

`

export const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
`

export const Title= styled.h1`
    margin-top:0px;
`

export const ChannelName = styled.div`
    
`

export const ViewsAndPublished = styled.div`
    margin-top:10px;
`