import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* text-align: center; */
  /* justify-content: space-between; */

  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.accentVeryDark};
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  font-size: ${props => props.theme.typography.fontSize.small};

  height: 40px;
  width: 540px;
  margin: 0 auto;
  padding: 0 24px;
  border-radius: 0 0 5px 5px;

  .item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    
  }

  #items-left-container {
    width: 25%;
  }

  #filters-container {
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    
  }

  #clear-container {
    justify-content: flex-end;
    text-align: right;
    width: 25%;
  } 

`