// pages/about.tsx
"use client"
import styled from 'styled-components';
import NewHeader from '@/components/header';


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
    color: 2c3e50;
    text-align: justify;
`;

export default function About() {
    return (
        <>
            <NewHeader />
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


