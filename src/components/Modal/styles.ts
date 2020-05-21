import styled from 'styled-components';

export const ModalMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10001;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  min-width: 360px;
  max-width: 600px;
  background-color: #ffffff;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.5);
  z-index: 10002;

  footer {
    background: #f5f5f5;
    height: 69px;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #059d42;

  span {
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    padding: 6px 20px;
  }

  a {
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    padding: 6px 20px;
  }
`;

export const ModalContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 21px 24px;
  padding: 34px 77px;

  button {
    display: block;
    border: 0;
    height: 96px;
    width: 100%;
    background: #d4e4db;
    color: #059d42;
    font-size: 28px;
    font-weight: 900;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    div {
      flex-grow: 0;
      flex-basis: 50%;
      max-width: 50%;
      padding: 16px;
    }
  }
`;
