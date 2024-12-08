"use client";
import React, { useState } from "react";
import { restroom } from "../types";
import BathroomFilter from "@/components/bathroom-filter";
import BathroomList from "@/components/bathroom-list";


export default function Page() {
    const [filters, setFilters] = useState({
      campus: "",
      building: "",
      gender: "",
      accessible: "",
    });

    return (
        <div> 
            <BathroomFilter filters={filters} setFilters={setFilters} />
            <BathroomList filters={filters} />
        </div>
    );
}


