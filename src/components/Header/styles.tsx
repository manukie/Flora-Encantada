import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #4CAF50; /* Green to represent nature */
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-family: 'Arial', sans-serif;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Tagline = styled.p`
  font-size: 1rem;
  font-style: italic;
`;

export const Button = styled.button`
  background-color: #FF9800;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #e68900;
  }
`;