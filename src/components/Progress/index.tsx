import React from 'react';
import formatValue from '../../utils/formatValue';

import { ProgressContainer } from './styles';

interface ProgressProps {
  target: number;
  total: number;
}

const Card: React.FC<ProgressProps> = ({ target, total }) => {
  return (
    <ProgressContainer widthPerc={(total / target) * 100}>
      <small>{`Total ${formatValue(target)}`}</small>
      <span>
        <span>{formatValue(total)}</span>
      </span>
    </ProgressContainer>
  );
};

export default Card;
