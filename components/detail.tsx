"use client";
import styled from 'styled-components';
import NewHeader from './header';

const DetailWrapper = styled.div`
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
  color: #ffffff;
  text-align: justify;
`;

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

export default function Detail({ restroom }: DetailProps) {
  return (
    <>
        <NewHeader />
        <DetailWrapper>
        <Title>Details for {restroom.building} - {restroom.location}</Title>
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