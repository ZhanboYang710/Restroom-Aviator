import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #2c3e50;
    color: #ecf0f1;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const NavLinks = styled.nav`
    display: flex;
    gap: 15px;

    a {
        text-decoration: none;
        color: #ecf0f1;
        font-size: 1rem;
        transition: color 0.2s;

        &:hover {
            color: #3498db;
        }
    }
`;

export default function NewHeader() {
    return (
        <HeaderWrapper>
            <Logo>Restroom Aviator</Logo>
            <NavLinks>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </NavLinks>
        </HeaderWrapper>
    );
}
