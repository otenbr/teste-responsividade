import styled from 'styled-components';

interface ProgressProps {
  widthPerc: number;
}

export const ProgressContainer = styled.div<ProgressProps>`
  small {
    margin-top: 24px;
    display: block;
    color: #778489;
    font-size: 10px;
    text-align: right;
  }

  span {
    display: block;
    width: 100%;
    background: #e9e9e9;
    border-radius: 10px;

    & > span {
      height: 16px;
      width: ${props => props.widthPerc}%;
      background: ${props => (props.widthPerc > 0 ? '#059d42' : '#e9e9e9')};
      color: #ffffff;
      font-size: 10px;
      padding: 2px 8px;
      text-align: right;
    }
  }
`;
