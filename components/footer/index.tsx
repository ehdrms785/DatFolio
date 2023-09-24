import styled from 'styled-components';

export const Footer: React.FC = () => {
  return <FooterContainer>Copyright 2023 Daro All rights reserved.</FooterContainer>;
};
const FooterContainer = styled.footer`
  text-align: center;
  font-size: 12px;
  color: #333;
  background-color: #fcfcfc;
  margin-top: 3rem;
  padding: 1rem;
  padding-bottom: 3rem;
`;
