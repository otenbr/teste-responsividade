import React from 'react';

import dollarImg from '../../assets/dollar_green.svg';
import plusImg from '../../assets/plus.svg';

import { CardContainer, CardDetails } from './styles';

import Progress from '../Progress';
import CardBadge from '../CardBadge';

interface Employee {
  id: string;
  name: string;
  target: number;
  total: number;
}

interface CardProps {
  employee: Employee;
  OpenModal: Function;
}

const Card: React.FC<CardProps> = ({ employee, OpenModal }) => {
  return (
    <>
      <CardBadge total={employee.total} />
      <CardContainer>
        <img src={dollarImg} alt="dollar" />
        <CardDetails>
          <strong>{employee.name}</strong>
          <p>
            Ao clicar no link abaixo, uma dialog irá aparecer perguntando
            quantos reais você deseja adicionar a barra de progresso. A barra
            deve começar em 0.
          </p>
          <Progress target={employee.target} total={employee.total} />
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              OpenModal();
            }}
          >
            <img src={plusImg} alt="plus" />
            Clique aqui para adicionar reais
          </a>
        </CardDetails>
      </CardContainer>
    </>
  );
};

export default Card;
