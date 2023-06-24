import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const changeActive = isactive => {
  switch (isactive) {
    case 'active':
      return 'color: violet';
    case 'inactive':
      return 'color: blueviolet';
    default:
      return 'color: blueviolet';
  }
};

export const Link = styled(NavLink)`
  display: inline-block;
  font-family: Coiny;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: magenta;
  }
  &:not(:hover, :focus) {
    ${({ isactive }) => changeActive(isactive)}
  }
  nav &:hover,
  nav &:focus {
    color: magenta;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;