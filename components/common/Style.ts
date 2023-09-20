import { CSSProperties } from 'react';
import { css } from 'styled-components';

/** Style 추론용 */
type TStyleKey = 'global' | 'footer';

export const Style: Record<TStyleKey, CSSProperties> = {
  global: {
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
    backgroundColor: 'white',
  },
  footer: {},
};

export const maxWidthWithAutoMargin = css`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`;
