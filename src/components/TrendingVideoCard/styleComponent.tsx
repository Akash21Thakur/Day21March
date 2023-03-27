import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  /* flex-wrap: wrap; */
  .channel-details {
    width: 500px;
  }
  h1 {
    font-size: 25px;
  }

  @media ((max-width: 992px) and  (min-width: 576px)) {

    i {
      
    }
    .channel-details {
      width: 300px;
    }
    h1 {
      font-size: 16px;
      /* color: red; */
    }
    /* font-size: 16px;
        width: 220px; */
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;
    padding: 0px;
    margin-bottom: 40px;

    h1 {
      margin-top: 4px;
      font-size: 15px;
    }

    .channel-details {
      margin-left: 0px;
      width: 300px;
    }
    /* width:100%; */
  }
`;

export const ImageContainer = styled.img`
  width: 320px;
  height: 180px;

  @media ((max-width: 992px) and  (min-width: 576px)) {
    width: 150px;
      height:100px;
  }
`;

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

export const Title = styled.h1`
  margin-top: 0px;
`;

export const ChannelName = styled.div`
color: #6d7886;
@media (max-width: 576px) {
    /* flex-direction: column; */
    margin-bottom: 6px;
  }`;

export const ViewsAndPublished = styled.div`
color: #6d7886;
  margin-top: 10px;
`;
