import { PropsWithChildren, useEffect, useState } from 'react';
import { IProject } from './IProject';
import styled from 'styled-components';
import { maxWidthWithAutoMargin } from '../common/Style';
import { SubTitle } from '../common/SubTitle';
import VideoPlayer from './video';
import { FadeInOnSlide } from '../common/FadeInOnSlide';

type Payload = IProject.Payload[];

export const Project = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return Component({ payload });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return payload?.map((project) => (
    <FadeInOnSlide>
      <Section>
        <Container>
          <Title>
            <PointText>{project.title}</PointText>
            <br />
            {project.subTitle}
          </Title>
        </Container>

        <Container
          style={{ display: 'flex', margin: '30px auto', alignItems: 'center', gap: '5rem' }}
        >
          <img
            src={project.image.src}
            style={{
              maxWidth: '300px',
            }}
          />
          {isClient && project.video && <VideoPlayer videoUrl={project.video} />}
        </Container>

        <Paragraph>{project.description}</Paragraph>

        <Container>
          {project.skills?.map((s) => (
            <SkillItem>{s}</SkillItem>
          ))}
        </Container>

        <Container style={{ marginTop: 20 }}>
          <LinkButton
            href="https://play.google.com/store/apps/details?id=com.pgcg.monegiApp"
            target="_blank"
          >
            PlayStore에서 보기
          </LinkButton>
        </Container>
      </Section>
    </FadeInOnSlide>
  ));
}

const Title = styled(SubTitle)`
  width: 70%;
`;
const Section = styled.section`
  margin-bottom: 8rem;
`;

const Container = styled.div`
  ${maxWidthWithAutoMargin}
  width: 90%;
`;

const PointText = styled.span`
  color: #ff9f06;
`;
const Paragraph = styled.p`
  ${maxWidthWithAutoMargin}
  padding: 1rem;
`;
const SkillItem = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #000;
  color: #fff;
`;
const LinkButton = styled.a`
  display: inline-block;
  text-align: center;
  background: #ff9e05;
  color: #fff;
  margin-right: 10px;
  padding: 8px 10px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
`;
