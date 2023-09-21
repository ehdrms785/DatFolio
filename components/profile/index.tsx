import { PropsWithChildren } from 'react';
import { IProfile } from './IProfile';
import styled from 'styled-components';

type Payload = IProfile.Payload;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return Component({ payload });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, title, name } = payload;
  return (
    <TitleSection src={image.src}>
      <MainTitle>
        <span className="title">{title}</span>
        <br />
        <span className="name">{name}</span>
      </MainTitle>
    </TitleSection>
  );
}

const TitleSection = styled.section<{ src: string }>`
  height: 100vh;
  max-width: 1500px;
  margin-bottom: 6rem;
  background-image: url(${({ src }) => src});
  background-size: auto 100vmin;
  background-repeat: no-repeat;
  background-position: right bottom;
`;

const MainTitle = styled.h1`
  position: sticky;
  top: 3rem;
  padding-left: 1rem;
  font-size: 3rem;
  margin: 0;

  span {
    display: inline-block;
    margin: 0.5rem auto;
  }

  .title {
    padding: 1rem 2rem;
    padding-right: 3rem;
    font-size: 1.5rem;
    color: #333;
    /* background-color: #fff; */
  }

  .name {
    padding: 1.5rem 2.5rem;
    padding-right: 4rem;
    color: #000;
    /* background-color: #fff; */
    font-size: 15vmin;
    margin-bottom: 0;
  }
`;
