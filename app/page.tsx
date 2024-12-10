"use client";
import React, { useState } from "react";
import styled from "styled-components";
import BathroomFilter from "@/components/bathroom-filter";
import BathroomList from "@/components/bathroom-list";
import NewHeader from "@/components/header";
import GlobalStyle from '@/styles/globalStyles';
import App from "next/app";


export default function Page() {
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
            <BathroomFilter filters={filters} setFilters={setFilters} />
            <BathroomList filters={filters} />
        </>
        
    );
}


