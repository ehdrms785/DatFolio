import { PropsWithChildren } from 'react';
import { IProfile } from './IProfile';
import styled from 'styled-components';
import { maxWidthWithAutoMargin } from '../common/Style';
import { Paragraph } from '../common/Paragraph';
import { LinkButton } from '../common/LinkButton';
import { SubTitle } from '../common/SubTitle';

type Payload = IProfile.Payload;

export const Profile = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <Section style={{ marginBottom: 200, marginTop: 300 }}>
      <Container>
        <S_SubTitle>{payload.title}</S_SubTitle>
      </Container>

      <Paragraph>{payload.description}</Paragraph>

      <Container>
        <LinkButton href={`mailto:${payload.email}`} style={{ marginBottom: 10 }}>
          {payload.email}
        </LinkButton>
        <br />
        <LinkButton href={`tel:${payload.phone.replace(/-/g, '')}`}>
          Phone: {payload.phone}
        </LinkButton>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 8rem;
`;
const Container = styled.div`
  ${maxWidthWithAutoMargin}
  width: 90%;
`;

const S_SubTitle = styled(SubTitle)`
  width: 70%;
`;
