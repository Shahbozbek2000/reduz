import styled from "styled-components";
import BackgroundContent from "../../assets/images/mobile/iphoneX.png";
import LayoutImage from "../../assets/images/mobile/layout.png";
import { systemColors } from "../../assets/styles/colors";

export const MobileViewProvider = styled.section`
  width: 100%;
  height: auto;
  background-image: url(${LayoutImage});
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Rubik", sans-serif;
  margin-top: 150px;
  h2 {
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    width: 55%;
    margin: 60px auto;
    text-align: center;
    color: ${systemColors.mainBlue};
  }
  .scroll-animation {
    margin-top: 180px;
    margin-bottom: 60px;
    h1 {
      width: 100%;
      color: ${systemColors.mainBlue};
      font-size: 33px;
      text-align: center;
      font-weight: 400;
    }
    .image-wrapper {
      img {
        width: 100%;
      }
    }
    @media (max-width: 676px) {
      margin-top: 40px;
    }
  }

  @media (max-width: 992px) {
    .col-lg-4:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    h2 {
      width: 90%;
    }
    .col-lg-4:nth-child(2),
    .col-lg-4:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 400px) {
    h2 {
      width: 95%;
    }
  }
`;
export const MobileContent = styled.div`
  height: auto;
`;
export const BackContent = styled.div`
  width: 67%;
  height: 70vh;
  margin: 0 auto;
  background-size: cover;
  overflow: hidden;
  border-radius: 12px;
  padding: 20px 15px;
  background-image: url(${BackgroundContent});
  ::-webkit-scrollbar {
    display: none;
  }
  .image-wrap {
    width: 100%;
    height: 64vh;
    overflow: hidden;
    .front {
      width: 100%;
      height: auto;
      left: 10px;
      opacity: 1;
    }
  }
  @media (max-width: 576px) {
    width: 55%;
    height: 60vh;
    margin: 0 auto;
    .image-wrap {
      width: 100%;
      height: 55vh;
    }
  }
  @media (max-width: 400px) {
    width: 70%;
    height: 60vh;
    .image-wrap {
      height: 55vh;
    }
  }
 
`;
