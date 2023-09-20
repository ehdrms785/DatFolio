import { CSSProperties } from 'react';

/** Style 추론용 */
type TStyleKey = 'global' | 'footer';

export const Style: Record<TStyleKey, CSSProperties> = {
  global: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
  },
  footer: {},
};
