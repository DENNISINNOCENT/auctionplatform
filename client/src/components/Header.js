import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo>DEINAUCTION</Logo>
      <nav>
        <StyledLink exact to="/">
          Home
        </StyledLink>
        <StyledLink exact to="/new">
          New commodity
        </StyledLink>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: maroon;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px 32px;
`;

const Logo = styled.h1`
  font-family: "Londrina Outline", cursive;
  margin: 0;
  color: yellow;
  font-size: 3rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: yellow;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 8px;
  padding: 8px;

  &.active {
    border-bottom: 3px solid;
  }
`;

export default Header;
