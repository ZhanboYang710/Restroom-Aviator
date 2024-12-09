import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
    padding: 0 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #00ccff;
`
const StyledLabel = styled.label`
    color: black;
`
const StyledSelect = styled.select`
    width: 12vw;
`


type BathroomFilterProps = {
    filters: {
        campus: string,
        building: string,
        gender: string,
        accessible: string,
    };
    
    setFilters: React.Dispatch<
        React.SetStateAction<{
            campus: string,
            building: string,
            gender: string,
            accessible: string,
        }>
    >;
};


export default function BathroomFilter({ filters, setFilters }: BathroomFilterProps) {
    const campusOptions = ["East", "Central", "South", "West"]
    const buildingOptions : { [key: string]: string[] } 
        // use a dict structure since basically buidlings are children of campus
    = {
        East: ["Towers"],
        Central: ["CAS", "GSU", "Warren"],
        South: ["Photonics"],
        West: ["CGS", "West Dining Hall"],
    };

    return (
        <StyledDiv>
            {/* The following is heavily inspired by the old page.tsx contributed by Akemi */}
            <StyledLabel>
                Campus:
                <StyledSelect
                value={filters.campus}
                onChange={(e) => setFilters({ ...filters, campus: e.target.value, building: "" })}
                >
                <option value="">All</option>
                {campusOptions.map((campus) => (
                    <option key={campus} value={campus}>
                    {campus}
                    </option>
                ))}
                </StyledSelect>
            </StyledLabel>

            <StyledLabel>
                Building:
                <StyledSelect
                value={filters.building}
                onChange={(e) => setFilters({ ...filters, building: e.target.value })}
                disabled={!filters.campus}
                >
                <option value="">All</option>
                {filters.campus &&
                    buildingOptions[filters.campus].map((building) => (
                    <option key={building} value={building}>
                        {building}
                    </option>
                    ))}
                </StyledSelect>
            </StyledLabel>

            <StyledLabel>
                Gender:
                <StyledSelect onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
                <option value="">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Gender Neutral">Gender Neutral</option>
                </StyledSelect>
            </StyledLabel>

            <StyledLabel>
                Accessible:
                <StyledSelect onChange={(e) => setFilters({ ...filters, accessible: e.target.value })}>
                <option value="">All</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
                </StyledSelect>
            </StyledLabel>
        </StyledDiv>
    )
}