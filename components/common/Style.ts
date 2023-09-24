import { CSSProperties } from 'react';
import { css } from 'styled-components';

/** Style 추론용 */
type TStyleKey = 'global' | 'blue' | 'gray' | 'sign';

export const Style: Record<TStyleKey, CSSProperties> = {
  global: {
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: "'Noto Sans KR', sans-serif",
  },
  blue: {
    color: '#3c78d8',
  },

  gray: {
    color: 'gray',
  },
  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
    textAlign: 'right',
  },
};

export const maxWidthWithAutoMargin = css`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`;
