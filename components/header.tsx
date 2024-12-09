// Header Component
import styled from 'styled-components';



const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #343a40;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const AppHeader = () => (
    <Header>
        <Title>BU Restroom Rater</Title>
        <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </Nav>
    </Header>
);


export const MiniHeader = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <Header>
            <Title>Restroom Selected</Title>v
            <Nav>
                <NavLink as="button" onClick={goBack}>
                    Go Back
                </NavLink>
            </Nav>
        </Header>
    );
};
