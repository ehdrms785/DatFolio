import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { IIntroduce } from './IIntroduce';
import { maxWidthWithAutoMargin } from '../common/Style';
import { SubTitle } from '../common/SubTitle';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return Component({ payload });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { subTitle, description } = payload;
  return (
    <section className="mb-5">
      <Container>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
      <Description>{description}</Description>
    </section>
  );
}
const Container = styled.div`
  ${maxWidthWithAutoMargin}
  width: 90%;
`;

const Description = styled.p`
  ${maxWidthWithAutoMargin}
  padding: 1rem;
`;
