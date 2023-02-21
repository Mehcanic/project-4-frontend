import styled from "styled-components"
import { darkTheme } from '../../styles/theme'

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: ${darkTheme.typography.fontSize.header};
  font-weight: ${darkTheme.typography.fontWeight.bold};
  letter-spacing: 15px;
  line-height: 40px;
  margin: 0;
  padding: 1rem;

`


const Header = () => {



  return (
    <div className="logo">
      <HeaderTitle>TODO</HeaderTitle>
    </div>
  )
}

export default Header