import styled from 'styled-components'
const HeadWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  .navbar {
    padding: 57px 0;
  }
  .navbar-nav {
    gap: 64px;
    padding-top: 21px;
    a {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH1};
      color: ${({ theme }) => theme.colors.secondaryColor};
      letter-spacing: 0.44px;
    }
  }
`

export default HeadWrapper; 