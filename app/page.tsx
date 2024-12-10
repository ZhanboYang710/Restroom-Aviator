// This app aim to provide a browersing of all(expecatied when 
// fully deployed) the restrooms on campus of BU, user can find
// bathrooms by filtering campus, building, gender and so on, and 
// choose the best one based on their preference according to a 
// series of evaluation indicators.
// The goal of this app is to provide a convinient and comfortable
// journey for users to find the best restroom to their likings.

// inspired by pages.tsx by Akemi, contributed by Zhanbo
// home page of the web application
"use client";
import React, { useState } from "react";
import styled from "styled-components";
import BathroomFilter from "@/components/bathroom-filter";
import BathroomList from "@/components/bathroom-list";
import NewHeader from "@/components/header";
import GlobalStyle from '@/styles/globalStyles';
import App from "next/app";

// Home Page Component
export default function Page() {
    // the criteria of filtering needs to be passed on to 
    // list-display to select the qualified restrooms
    const [filters, setFilters] = useState({
      campus: "",
      building: "",
      gender: "",
      accessible: "",
    });

    return (
        <>
        <GlobalStyle />
        <NewHeader />
            {/* bathroom filter component */}
            <BathroomFilter filters={filters} setFilters={setFilters} />
            {/* bathroom list component */}
            <BathroomList filters={filters} />
        </>
        
    );
}


