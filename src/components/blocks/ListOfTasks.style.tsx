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

  .list-container {
    width: 100%;
  }

  .circle-container {

    .cicrle {
      border: 1px solid white;
      /* ${props => props.theme.colors.primary}; */
      border-radius: 50%;
      width: 24px;
      height: 24px;
      /* margin-left: 24px; */

      &:hover {
        background-image: url(${iconCheck});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 18px;
        /* margin: 16px; */
        cursor: pointer;
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
        /* margin-right: 15px; */
      }
    }

    .remove-container {

      .remove {
        width: 24px;
        height: 24px;
        border: 1px solid black;


        &:hover {
          background-image: url(${iconCross});
          background-repeat: no-repeat;
          background-position: center;
          background-size: 24px;
          /* margin: 16px; */
          cursor: pointer;
        }
      }
    }

    &:hover {
      border-bottom: 1px solid ${props => props.theme.colors.fontColor};
    }
`

