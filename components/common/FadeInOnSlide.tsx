import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const FadeInOnSlide = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const element = ref.current;
      const { top } = element?.getBoundingClientRect();

      if (top < scrollX + innerHeight * 0.6) {
        setOpacity(1);
        window.removeEventListener('scroll', onScroll);
      } else {
        setOpacity(0);
      }
    }

    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <StyledFadeInOnSlide ref={ref} style={{ opacity }}>
      {children}
    </StyledFadeInOnSlide>
  );
};

const StyledFadeInOnSlide = styled.div`
  transition: opacity 0.7s;
`;
