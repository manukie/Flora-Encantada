import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #2E7D32;
  color: white;
  padding: 10px 10px;
  margin-top: 30px;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const CopyrightContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 170px;
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Copyright = styled.p`
  font-size: 0.9rem;
`;
