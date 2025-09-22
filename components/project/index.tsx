import { PropsWithChildren, useEffect, useState } from 'react';
import { IProject } from './IProject';
import styled from 'styled-components';
import { maxWidthWithAutoMargin } from '../common/Style';
import { SubTitle } from '../common/SubTitle';
import VideoPlayer from './video';
import { FadeInOnSlide } from '../common/FadeInOnSlide';
import { ImageSize } from '../common/ImageSize';
import { LinkButton } from '../common/LinkButton';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Payload = IProject.Payload[];

export const Project = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return payload?.map((project) => {
    const hasMedia = Boolean(project.image) || Boolean(isClient && project.video);

    return (
      <FadeInOnSlide>
        <Section>
          <Container>
            <Title>
              <PointText>{project.title}</PointText>
              <br />
              {project.subTitle}
            </Title>
          </Container>

          {hasMedia && (
            <Container
              style={{
                display: 'flex',
                margin: '30px auto',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              {project.image && (
                <ProjectImg
                  src={project.image.src}
                  width={project?.size?.width}
                  height={project?.size?.height}
                />
              )}
              {isClient && project.video && <VideoPlayer videoUrl={project.video} />}
            </Container>
          )}

          <ContentGrid $hasMedia={!hasMedia}>
            <Markdown>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.description}</ReactMarkdown>
            </Markdown>

            <SidePanel>
              {project.skills?.length ? (
                <>
                  <SideTitle>Tech Stack</SideTitle>
                  <SkillWrap>
                    {project.skills.map((s, i) => (
                      <SkillChip key={i}>{s}</SkillChip>
                    ))}
                  </SkillWrap>
                </>
              ) : null}

              {project?.link && (
                <SideAction>
                  <LinkButton href={project.link} target="_blank">
                    {project.device === 'app' ? 'PlayStore에서 보기' : `${project.title} 보기`}
                  </LinkButton>
                </SideAction>
              )}
            </SidePanel>
          </ContentGrid>
        </Section>
      </FadeInOnSlide>
    );
  });
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

const ContentGrid = styled.div<{ $hasMedia?: boolean }>`
  ${maxWidthWithAutoMargin}
  width: 90%;
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 2rem;
  align-items: start;

  background: #0a0a0a;
  border: 1px solid #222;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);

  color: #d1d5db;
  font-size: 1rem;
  margin-top: ${({ $hasMedia }) => ($hasMedia ? '0' : '-1rem')};

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

const Markdown = styled.div`
  ${maxWidthWithAutoMargin}

  h3 {
    margin: 1.5rem 0 0.75rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.25;
    padding-left: 0.75rem;
    border-left: 4px solid #ff9f06;
    color: #fafafa;
  }

  p {
    margin: 0.5rem 0 1rem;
    line-height: 1.8;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0.25rem 0 1rem;
  }

  ul li {
    position: relative;
    padding-left: 1.25rem;
    margin: 0.4rem 0;
    line-height: 1.7;
  }

  ul li::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0;
    line-height: 1.4;
    color: #ff9f06;
  }

  code {
    background: #181818;
    padding: 0.1rem 0.4rem;
    border-radius: 0.25rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.9rem;
    border: 1px solid #2a2a2a;
  }

  hr {
    border: none;
    border-top: 1px solid #2a2a2a;
    margin: 2rem 0;
  }
`;
const SideAction = styled.div`
  margin-top: 1.5rem;
`;
const SidePanel = styled.aside`
  position: sticky;
  top: 80px;
  align-self: start;
`;

const SkillWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SkillChip = styled.span`
  display: inline-block;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  border: 1px solid #333;
  background: #131313;
  color: #e5e5e5;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  &:hover {
    background: #1a1a1a;
    border-color: #555;
  }
`;
const SideTitle = styled.h4`
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #f0f0f0;
`;
