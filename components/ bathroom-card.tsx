// contributed by Zhanbo
// single restroom display component

import React from "react";
import Link from "next/link";
import { restroom } from "../types";
import styled from "styled-components";

const StyledConatiner = styled.div`
    padding: 1rem;
    background-color: Beige;
`
const StyledDiv = styled.div`
    border-width = 2px;
    color: black;
`
const StyledLink = styled(Link)`
// did not use in currently stage
`

type BathroomProps = {
    restroom: restroom;
};

// displaying information of a single restroom in a Card component
export default function BathroomCard( { restroom }: BathroomProps) {
    return (
        <StyledConatiner>
        <StyledLink href={`/restroom/${restroom.id}`}>  {/* link to dynamically routing page */}
            <StyledDiv>
                {/* attributes of restrooms to be displayed on a Card */}
                <h2>{restroom.building}</h2>
                <p>Floor: {restroom.floor}</p>
                <p>Gender: {restroom.gender}</p>
                <p>Accessible: {restroom.accessible ? "Yes" : "No"}</p>
                <p>Overall Rating: {restroom.ratings?.overall || "N/A"}</p>
            </StyledDiv>
        </StyledLink>
        </StyledConatiner>
    )
}