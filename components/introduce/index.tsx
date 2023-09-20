import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { IIntroduce } from './IIntroduce';
import { maxWidthWithAutoMargin } from '../common/Style';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return Component({ payload });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { subTitle, description } = payload;
  return (
    <section className="mb-8">
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
const SubTitle = styled.h2`
  font-size: 56px;
  margin: 1rem auto;
  width: 70%;
  min-width: 300px;
  margin-left: 0;
  word-break: keep-all;
`;
const Description = styled.p`
  ${maxWidthWithAutoMargin}
  padding: 1rem;
`;
