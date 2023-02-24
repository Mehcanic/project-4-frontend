import styled from 'styled-components'

import iconCross from '../../assets/icon-cross.svg'
import iconCheck from '../../assets/icon-check.svg'

export const List = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.fontColor};
  font-weight: ${props => props.theme.typography.fontWeight.regular};
  width: 540px;
  height: auto;
  margin: 0 auto;
  margin-top: 2px;
  border-radius: 5px 5px 0 0;
` 
export const ListItem = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 492px;
  min-height: 40px;
  margin: 0 auto; 
  padding: 6px 0;
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.accentDarkHover};
    cursor: pointer;

    .circle {
      border: .25px solid ${props => props.theme.colors.fontColor};
      cursor: pointer;
    }

    .remove {
          background-image: url(${iconCross});
          background-repeat: no-repeat;
          background-position: center;
          background-size: 18px;
          color: ${props => props.theme.colors.accentDark};
          cursor: pointer;
        }
    
  }
  
  .list-container {
    width: 100%;
  }
  
  .circle-container {
    position: relative;
    
    .circle {
      position: relative;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      border: 5px solid ${props => props.theme.background.gradient}; 

      &:hover {
        border-width: 2px;
        cursor: pointer;

        &::before {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          border-radius: 50%;
          background: ${props => props.theme.background.secondary};
          z-index: 1;
        }
      }
    }
  }

  .text-container {
    width: 400px;
    p {
      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
      width: 100%;
    }
  }

    .remove-container {
      .remove {
        width: 24px;
        height: 24px;

        &:hover {
          background-image: url(${iconCross});
          background-repeat: no-repeat;
          background-position: center;
          background-size: 24px;
          color: ${props => props.theme.colors.accentDark};
          cursor: pointer;
        }
      }
    }

    
`

