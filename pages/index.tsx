import type { NextPage } from 'next';
import Head from 'next/head';
import Payload from '../payload';
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

const Home: NextPage = () => {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon.src} />
      </Head>
      <Container style={Style.global}>
        {/* 간단 소개*/}
        <Introduce payload={Payload.introduce} />
        {/* 스킬 */}
        <FadeInOnSlide>
          <Skill payload={Payload.skill} />
        </FadeInOnSlide>
        {/* 프로젝트 */}
        <FadeInOnSlide>
          <Container style={{ marginTop: 300, marginBottom: 200, textAlign: 'center' }}>
            <LinerTitle>프로 젝트</LinerTitle>
          </Container>
        </FadeInOnSlide>
        <Project payload={Payload.project} />
        {/* 포부 */}
        <FadeInOnSlide>
          <Profile payload={Payload.profile} />
        </FadeInOnSlide>
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
