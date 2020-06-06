import styled from 'styled-components'

import COLORS from '../color'

export default styled.button`
  border: none;
  border-radius: 4px;

  ${({ full }) => full && `width: 100%;`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ fontSize }) => fontSize && `font-size:${fontSize}px;`}
  ${({ color }) =>
    COLORS[color] &&
    `
    background: ${COLORS[color]};
    color: #fff;
  `}
  ${({ disabled }) =>
    disabled &&
    `
    background: ${COLORS.gray};
  `}
`
