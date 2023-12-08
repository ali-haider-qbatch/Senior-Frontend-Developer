import styled from 'styled-components'
const HeadWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  .navbar {
    padding: 57px 0;
    @media (max-width:991px){
      .navbar{
        padding:24px  0px;
      }
  }
  .navbar-nav {
    gap: 64px;
    padding-top: 21px;
    display:flex;
    width:100%;
    justify-content:end;
    @media (max-width:1199px){
      justify-content:start;
      gap:12px;
    }

    a {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH1};
      color: ${({ theme }) => theme.colors.secondaryColor};
      letter-spacing: 0.44px;
    }
  }
}
`

export default HeadWrapper; 