import { PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';
import { IIntroduce } from './IIntroduce';
import { Style, maxWidthWithAutoMargin } from '../common/Style';
import { SubTitle } from '../common/SubTitle';

type Payload = IIntroduce.Payload;

export const Introduce = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  const { subTitle, description, signature } = payload;
  return (
    <section className="mb-5">
      <ProfileSection>
        <TitleArea>
          <Title>PORTFOLIO</Title>
        </TitleArea>
      </ProfileSection>

      <TContainer>
        <SubTitle>{subTitle}</SubTitle>
      </TContainer>
      <Description>{description}</Description>
      <Signature style={Style.sign}>{signature}</Signature>
    </section>
  );
};

const ProfileSection = styled.section`
  ${maxWidthWithAutoMargin}
  max-width: 900px;
`;

const TitleArea = styled.div`
  height: 30vh;
  border-left: 2px solid gray;
`;
const Title = styled.h2`
  margin-left: 125px;
  padding-top: 3rem;
  font-size: 56px;
`;

const slideLineAnimation = keyframes`
  0% {
    right: -360%;
    width: 0;
  }
  100% {
    right: -180%;
    width: 800px;
  }
`;

const TContainer = styled.div`
  ${maxWidthWithAutoMargin}
  width: 90%;
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    height: 2px;
    background: gray;
    transform: translateX(-50%);
    animation: ${slideLineAnimation} 1s forwards; /* keyframes 애니메이션 적용 */
  }
`;

const Description = styled.p`
  ${maxWidthWithAutoMargin}
  padding: 1rem;
  font-weight: 300;
`;

const Signature = styled.p`
  ${maxWidthWithAutoMargin}
`;
