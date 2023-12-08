import styled from 'styled-components'
const HeaderBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding-top: 135px;
  @media (max-width:991px){
    padding-top:24px;
  }
  position: relative;

  .left-section {
    padding-left: 40px;
    .section-heading {
      font-size: 54px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      line-height: 79px;
      @media (max-width:768px){
        font-size: 32px;
        line-height: 42px;
      }
      span {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
    .paragraph {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: #464646;
      margin-top: 37px;
      max-width: 597px;
      font-family: 'Nunito Sans', sans-serif;
      line-height: 36px;
      @media (max-width:1143px){
        padding-right: 97px;
        @media (max-width:768px){
          margin-top: 24px;
      }
      }
  
    }
    .btn-wrapper{
      @media (max-width:1316px){
        flex-wrap:wrap ;
      }
    }
    .play-box {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: #252641;
      span {
        margin-left: -20px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      }
    }
  }
  .right-section {
    margin-top: -212px;
    margin-left: 28px;
    position: relative;
    @media (max-width:991px){
      margin-top:0px ;
    }
    .assisted-student {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      position: absolute;
      top: 172px;
      padding: 24px;
      animation: moveUpAndDown 3s infinite alternate;
      @media (max-width:1315px){
        left:-60px;
      }
      @keyframes moveUpAndDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(80px);
          }
        }
      .text {
        span:first-child {
          font-size: 24px;
          color: #595959;
        }
        span:nth-child(2) {
          font-size: 20px;
          color: #545567;
        }
      }
    }
    .experincee {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      position: absolute;
      top: 500px;
      padding: 24px;
      animation: moveUpAndDown 2s infinite alternate;

      /* @media (max-width:1315px){
        left:-60px;
        @media (max-width:1078px){
         left:-152px;
      } */
      }
      @keyframes moveUpAndDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(80px);
          }
        }
    }
    .graph {
      position: absolute;
      top: 172px;
      right: 80px;
      padding: 24px;
      animation: moveUpAndDown 2s infinite alternate;
      @keyframes moveUpAndDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(60px);
          }
      }
    }
    .admission {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      position: absolute;
      right: 19px;
      top: 394px;
      padding: 24px;
      @media (max-width:1591px){
        right: -39px;
      }
      .check-icon {
        position: absolute;
        right: 40px;
        top: 20px;
      }
    }
    .envolpe-box {
      background-color: ${({ theme }) => theme.colors.primaryColor};
      width: 50px;
      height: 50px;
      padding: 8px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  .bootom-svg {
    svg {
      position: absolute;
      bottom: 0px;
    }
  }
`

export default HeaderBanner;
