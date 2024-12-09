import React from "react";
import Link from "next/link";
import { restroom } from "../types";
import styled from "styled-components";

const StyledConatiner = styled.div`
    padding: 1rem;
    background-color: Beige;
`

// style={{ cursor: "pointer", border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}
const StyledDiv = styled.div`
    border-width = 2px;
    color: black;
`
const StyledLink = styled(Link)`
`

type BathroomProps = {
    restroom: restroom;
};

export default function BathroomCard( { restroom }: BathroomProps) {
    return (
        <StyledConatiner>
        <StyledLink href={`/restroom/${restroom.id}`}>
            <StyledDiv>
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