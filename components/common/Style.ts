import { CSSProperties } from 'react';
import { css } from 'styled-components';

/** Style 추론용 */
type TStyleKey = 'global' | 'blue' | 'gray' | 'footer';

export const Style: Record<TStyleKey, CSSProperties> = {
  global: {
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  blue: {
    color: '#3c78d8',
  },

  gray: {
    color: 'gray',
  },
  footer: {},
};

export const maxWidthWithAutoMargin = css`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`;
