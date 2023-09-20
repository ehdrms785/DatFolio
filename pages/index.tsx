import type { NextPage } from 'next';
import Head from 'next/head';
import Payload from '../payload';
import { Container } from 'reactstrap';
import { Style } from '../components/common/Style';
import { FadeInOnSlide } from '../components/common/FadeInOnSlide';
import { NextSeo } from 'next-seo';
import { Profile } from '../components/profile';
import { Introduce } from '../components/introduce';

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
        <Profile.Component payload={Payload.profile} />
        <FadeInOnSlide>
          <Introduce.Component payload={Payload.introduce} />
        </FadeInOnSlide>

        {/* 스킬 */}

        {/* 프로젝트 */}

        {/* Footer */}
      </Container>
    </>
  );
};

export default Home;
