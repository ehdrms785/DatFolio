import styled from 'styled-components';

export const LinerTitle = styled.h2`
  font-size: 56px;
  margin: 1rem auto;
  min-width: 300px;
  margin-left: 0;
  word-break: keep-all;
  white-space: pre-line;

  display: inline-block;
  padding: 5px 300px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: padding 0.3s, border-radius 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent 50%, rgba(0, 0, 0, 0.6) 50%);
    transform: translateX(-50%);
    border-radius: 30px;
    z-index: -1;
    transition: width 0.3s, border-radius 0.3s;
  }
`;
