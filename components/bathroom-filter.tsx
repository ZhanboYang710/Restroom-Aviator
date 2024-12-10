// contribued by Zhanbo
// restroom filter selection component
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 0 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #2c3e50; /* Match the background color of the About page */
`;

const StyledLabel = styled.label`
  color: #ffffff; /* Match the text color of the About page */
`;

const StyledSelect = styled.select`
  width: 12vw;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  color: #2c3e50; /* Match the text color of the About page */
`;


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

// handles selection of criteria, and update the filters 
// with the setFilters function
export default function BathroomFilter({ filters, setFilters }: BathroomFilterProps) {
    const campusOptions = ["East", "Central", "South", "West"]
    const buildingOptions : { [key: string]: string[] } 
        // use a dict structure since basically buildings are children of campus
    = {
        East: ["COM", "Questrom", "Towers", "Marciano", "Myles", "Kilachand", "Danielsen"],
        Central: ["CAS", "GSU", "CDS", "Mugar", "Warren", "Sargent", "Law"],
        South: ["Photonics"],
        West: ["CGS", "West Dining Hall", "FitRec", "Stuvi1", "Stuvi2", "Sleeper", "CFA", "Agganis"],
    };

    return (
        <StyledDiv>
            {/* The following is heavily inspired by the old page.tsx contributed by Akemi */}
            <StyledLabel>
                Campus:
                <StyledSelect
                value={filters.campus}
                onChange={(e) => setFilters({ ...filters, campus: e.target.value, building: "" })}
                // onChange action triggers the update of filters
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