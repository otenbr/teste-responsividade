import React from 'react';

import { ModalContainer, ModalMask, ModalHeader, ModalContent } from './styles';

interface ModalProps {
  visible: boolean;
  name: string;
  SelectAction?: (value: number) => void;
  CloseAction?: Function;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  name,
  SelectAction,
  CloseAction,
}) => {
  function handleButton(value: number): void {
    if (SelectAction) SelectAction(value);
  }

  function close(): void {
    if (CloseAction) CloseAction();
  }

  return visible ? (
    <>
      <ModalMask onClick={() => close()} />

      <ModalContainer>
        <ModalHeader>
          <span>
            {`Quantos reais adicionar para ${name}
          ?`}
          </span>
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              close();
            }}
          >
            X
          </a>
        </ModalHeader>
        <ModalContent>
          <div>
            <button type="button" onClick={() => handleButton(25)}>
              R$ 25
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleButton(50)}>
              R$ 50
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleButton(75)}>
              R$ 75
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleButton(125)}>
              R$ 125
            </button>
          </div>
        </ModalContent>
        <footer />
      </ModalContainer>
    </>
  ) : null;
};

export default Modal;
