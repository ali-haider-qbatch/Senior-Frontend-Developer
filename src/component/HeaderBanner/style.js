import styled from 'styled-components'
const HeaderBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding-top: 135px;
  position: relative;

  .left-section {
    padding-left: 40px;
    .section-heading {
      font-size: 54px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      line-height: 79px;
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
    .assisted-student {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      position: absolute;
      top: 172px;
      padding: 24px;
      animation: moveUpDown 5s ease-in-out infinite alternate;
      @keyframes moveUpDown {
        0% {
          top: 168px;
        }
        100% {
          top: 175px;
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
      animation: moveUpDowns 5s ease-in-out infinite alternate;
      @keyframes moveUpDowns {
        0% {
          top: 495px;
        }
        100% {
          top: 510px;
        }
      }
    }
    .graph {
      position: absolute;
      top: 172px;
      right: 80px;
      padding: 24px;
      animation: moveUpDown 5s ease-in-out infinite alternate;
      @keyframes moveUpDown {
        0% {
          top: 170px;
        }
        100% {
          top: 180px;
        }
      }
    }
    .admission {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      position: absolute;
      right: 19px;
      top: 500px;
      padding: 24px;
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
  }
  .bootom-svg {
    svg {
      position: absolute;
      bottom: 0px;
    }
  }
`

export default HeaderBanner;
