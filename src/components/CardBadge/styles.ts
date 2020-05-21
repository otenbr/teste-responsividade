import styled from 'styled-components';

interface CardBadgeContainerProps {
  hasValue: boolean;
}

export const CardBadgeContainer = styled.div<CardBadgeContainerProps>`
  position: relative;
  color: #ffffff;
  margin: -16px -16px;
  /* margin-right: -16px; */
  /* right: 0; */

  div {
    background-color: ${props => (props.hasValue ? '#059D42' : '#e14646')};
    padding: 0 14px;
    max-width: 270px;
    display: flex;
    height: 38px;
    align-items: center;
    margin-left: auto;

    img {
      width: 22px;
      padding: 2px;
      margin-right: 14px;
    }

    strong {
      font-size: 16px;
      font-weight: bold;
      white-space: nowrap;
    }
  }
`;
