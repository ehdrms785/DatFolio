import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const playerStyle: React.CSSProperties = {
    border: `1px solid gray`,
    borderRadius: '1.04rem',
    boxShadow: '20px 0px 10px rgba(0, 0, 0, 0.3)',
    transform: 'perspective(2000px) rotateY(-12deg)'
  };

  return (
    <Container>
      <ReactPlayer url={videoUrl} controls width="302px" height="580px" style={playerStyle} />
    </Container>
  );
};

export default VideoPlayer;

const Container = styled.div`
  video {
    border-radius: 1rem;
    border-color: gray;
    &:focus {
      outline: 1px solid gray;
    }
  }
`;
