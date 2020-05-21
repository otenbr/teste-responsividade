import React from 'react';
import formatValue from '../../utils/formatValue';

import dollarImg from '../../assets/dollar_white.svg';

import { CardBadgeContainer } from './styles';

interface CardBadgeProps {
  total: number;
}

const CardBadge: React.FC<CardBadgeProps> = ({ total }) => {
  return (
    <CardBadgeContainer hasValue={total > 0}>
      <div>
        <img src={dollarImg} alt="dollar" />
        {total > 0 ? (
          <strong>{`Você já adicionou ${formatValue(total)}`}</strong>
        ) : (
          <strong>Você não adicionou nada</strong>
        )}
      </div>
    </CardBadgeContainer>
  );
};

export default CardBadge;
