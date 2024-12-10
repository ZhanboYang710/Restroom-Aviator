// contributed by Zhanbo
// single restroom display component

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { restroom } from "@/types";

const StyledContainer = styled.div`
  padding: 1rem;
  background-color: #2c3e50;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;

const StyledDiv = styled.div`
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

type BathroomProps = {
  restroom: restroom;
};

// displaying information of a single restroom in a Card component
export default function BathroomCard({ restroom }: BathroomProps) {
  return (
    <StyledContainer>
      <StyledLink href={`/restroom/${restroom.id}`}> {/* link to dynamically routing page */}
        <StyledDiv>
          {/* attributes of restrooms to be displayed on a Card */}
          <h2>{restroom.building}</h2>
          <p>Floor: {restroom.floor}</p>
          <p>Gender: {restroom.gender}</p>
          <p>Accessible: {restroom.accessible ? "Yes" : "No"}</p>
          <p>Overall Rating: {restroom.ratings?.overall || "N/A"}</p>
        </StyledDiv>
      </StyledLink>
    </StyledContainer>
  );
}