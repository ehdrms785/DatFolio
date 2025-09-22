import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Container } from 'reactstrap';
import { Style } from '../components/common/Style';
import { FadeInOnSlide } from '../components/common/FadeInOnSlide';
import { NextSeo } from 'next-seo';
import { Profile } from '../components/profile';
import { Introduce } from '../components/introduce';
import { Skill } from '../components/skill';
import { Project } from '../components/project';
import { LinerTitle } from '../components/common/LinerTitle';
import { Footer } from '../components/footer';

const Home = ({
  _global,
  introduce,
  skill,
  project,
  profile,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        {..._global.seo}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]}
      />

      <Container style={Style.global}>
        <Introduce payload={introduce} />
        <FadeInOnSlide>
          <Skill payload={skill} />
        </FadeInOnSlide>
        <FadeInOnSlide>
          <Container style={{ marginTop: 300, marginBottom: 200, textAlign: 'center' }}>
            <LinerTitle>프로 젝트</LinerTitle>
          </Container>
        </FadeInOnSlide>
        <Project payload={project} />
        {/* 포부 */}
        <FadeInOnSlide>
          <Profile payload={profile} />
        </FadeInOnSlide>
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { _global } = await import('../payload/_global');
  const introduce = (await import('../payload/introduce')).default;
  const profile = (await import('../payload/profile')).default;
  const project = (await import('../payload/project')).default;
  const skill = (await import('../payload/skill')).default;

  return {
    props: {
      _global,
      introduce,
      profile,
      project,
      skill,
    },
  };
};
