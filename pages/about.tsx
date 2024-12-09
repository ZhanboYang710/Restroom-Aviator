// About Page by Shangyuan Chen
import styled from 'styled-components';
import {AppHeader} from '../components/header';

//Styling using styled-components
const AboutWrapper = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: auto;
    font-family: Arial, sans-serif;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: #34495e;
    text-align: justify;
`;

//Main About Page Contents
export default function About() {
    return (
        <>
            <AppHeader />
            <AboutWrapper>
                <Title>About Us</Title>
                <Description>
                    Welcome to Restroom Aviator, your comprehensive platform for locating and reviewing restrooms.
                    Our mission is to ensure convenience and hygiene for everyone by providing detailed insights
                    into public facilities, tailored to meet diverse needs.
                </Description>
            </AboutWrapper>
        </>
    );
}

