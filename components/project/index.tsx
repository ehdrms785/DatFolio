import { PropsWithChildren, useEffect, useState } from 'react';
import { IProject } from './IProject';
import styled from 'styled-components';
import { maxWidthWithAutoMargin } from '../common/Style';
import { SubTitle } from '../common/SubTitle';
import VideoPlayer from './video';
import { FadeInOnSlide } from '../common/FadeInOnSlide';
import { ImageSize } from '../common/ImageSize';
import { LinkButton } from '../common/LinkButton';

type Payload = IProject.Payload[];

export const Project = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
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
          <ProjectImg
            src={project.image.src}
            width={project?.size?.width}
            height={project?.size?.height}
          />
          {isClient && project.video && <VideoPlayer videoUrl={project.video} />}
        </Container>

        <Paragraph>{project.description}</Paragraph>

        <Container>
          {project.skills?.map((s) => (
            <SkillItem>{s}</SkillItem>
          ))}
        </Container>

        {project?.link && (
          <Container style={{ marginTop: 20 }}>
            <LinkButton href={project.link ?? '#'} target="_blank">
              {project.device === 'app' ? 'PlayStore에서 보기' : `${project.title} 보기`}
            </LinkButton>
          </Container>
        )}
      </Section>
    </FadeInOnSlide>
  ));
};
const ProjectImg = styled.img<ImageSize>`
  width: ${(props) => props?.width ?? '300px'};
  height: ${(props) => props?.height};
`;
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
  white-space: pre-line;
`;
const SkillItem = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #000;
  color: #fff;
`;
