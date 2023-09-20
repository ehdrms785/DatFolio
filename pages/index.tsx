import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Payload from '../payload';
import { Container } from 'reactstrap';
import { Style } from '../components/common/Style';
import { FadeInOnSlide } from '../components/common/FadeInOnSlide';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon.src} />
      </Head>
      <Container>
        {/* 간단 소개*/}

        {/* 스킬 */}

        {/* 프로젝트 */}

        {/* Footer */}
      </Container>
    </>
  );
};

export default Home;
