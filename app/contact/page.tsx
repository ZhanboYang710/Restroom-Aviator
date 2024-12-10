// Shangyuan Chen: Contents of Contact Page, styling adjusted by Akemi
"use client"
import styled from 'styled-components';
import NewHeader from '@/components/header';

//styling wrappers
const ContactWrapper = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const li = styled.li`
    font-size: 1.2rem;
    line-height: 1.6;
    color: #2c3e50;
    text-align: justify;
`;



//Main Contact contents
export default function Contact() {
    return (
        <>
            <NewHeader />
            <ContactWrapper>
                <Title>Contact Us</Title>
                <Form>
                    <li>
                        Shangyuan Chen:
                        <a href="mailto:sychen@bu.edu">
                            sychen@bu.edu
                        </a>
                    </li>
                    <li>
                        Zhanbo Yang:
                        <a href="mailto:zyang710@bu.edu">
                            zyang710@bu.edu
                        </a>
                    </li>
                    <li>
                        Akemi Sai:
                        <a href="mailto:akemisai@bu.edu">
                            akemisai@bu.edu
                        </a>
                    </li>
                </Form>
            </ContactWrapper>
        </>
    );
}
