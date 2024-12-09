"use client";
import React, { useState } from "react";
import { restroom } from "../types";
import styled from "styled-components";
import BathroomFilter from "@/components/bathroom-filter";
import BathroomList from "@/components/bathroom-list";

const StyledDiv = styled.div`
    margin: 0px 50px;
`

export default function Page() {
    const [filters, setFilters] = useState({
      campus: "",
      building: "",
      gender: "",
      accessible: "",
    });

    return (
        <StyledDiv> 
            <BathroomFilter filters={filters} setFilters={setFilters} />
            <BathroomList filters={filters} />
        </StyledDiv>
    );
}


