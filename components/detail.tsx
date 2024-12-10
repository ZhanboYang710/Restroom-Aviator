// This file defines the Detail component used to display detailed information about a restroom.
// Used same logic as lab 7
// The component is styled to match the overall design of the application, ensuring consistency across pages.
// Contributed by Akemi Sai
"use client";
import styled from 'styled-components';
import NewHeader from './header'; // Importing the NewHeader component for consistent header styling

// Styled component for the wrapper
const DetailWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

// Styled component for the title
const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
`;

// Styled component for the description
const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ffffff; // White text color for better readability on dark backgrounds
  text-align: justify;
`;

// Type definition for the Detail component props
type DetailProps = {
  restroom: {
    building: string;
    location: string;
    campus: string;
    floor: number;
    gender: string;
    accessible: boolean;
    ratings: {
      odor: number;
      cleanliness: number;
      privacy: number;
      overall: number;
    };
    ratingCount: number;
  };
};

// Detail component to display restroom details
export default function Detail({ restroom }: DetailProps) {
  return (
    <>
      {/* NewHeader component for consistent header styling */}
      <NewHeader />
      <DetailWrapper>
        {/* Title of the restroom */}
        <Title>Details for {restroom.building} - {restroom.location}</Title>
        
        {/* Displaying various details of the restroom */}
        <Description><strong>Campus:</strong> {restroom.campus}</Description>
        <Description><strong>Building:</strong> {restroom.building}</Description>
        <Description><strong>Floor:</strong> {restroom.floor}</Description>
        <Description><strong>Gender:</strong> {restroom.gender}</Description>
        <Description><strong>Accessible:</strong> {restroom.accessible ? "Yes" : "No"}</Description>
        <Description><strong>Odor Rating:</strong> {restroom.ratings.odor}</Description>
        <Description><strong>Cleanliness Rating:</strong> {restroom.ratings.cleanliness}</Description>
        <Description><strong>Privacy Rating:</strong> {restroom.ratings.privacy}</Description>
        <Description><strong>Overall Rating:</strong> {restroom.ratings.overall}</Description>
        <Description><strong>Number of Ratings:</strong> {restroom.ratingCount}</Description>
      </DetailWrapper>
    </>
  );
}