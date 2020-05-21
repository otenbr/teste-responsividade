import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
  min-height: 196px;
  margin-bottom: 46px;

  img {
    padding: 24px;
    align-self: flex-start;
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  padding: 22px 50px 22px 0px;

  strong {
    color: #059d42;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    font-size: 12px;
    line-height: 17px;
  }

  a {
    color: #059d42;
    display: flex;
    align-items: center;
    margin-top: 25px;
    font-size: 12px;
    line-height: 17px;

    img {
      padding: 0px;
      margin-right: 8px;
      align-self: flex-start;
    }
  }
`;
