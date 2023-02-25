import styled from 'styled-components'

const BackgroundWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  max-width: 100%;
  min-height: 900px;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -5;

  header {
      background-image: url( ${props => props.theme.background.bgImageDesktop});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      max-width: 1440px;
      height: 300px;
      position: relative;
      top: 0;
      left: 0;
      z-index: -4;
      
      @media only screen and (max-width: 420px) {
        background-color: ${props => props.theme.background.bgImageMobile};
        max-width: 100%;
        height: 200px;
      }
    }
`


const AppBackground = () => {
  return (
    <BackgroundWrapper>
      <header>
      </header>
    </BackgroundWrapper>
  )
}

export default AppBackground 