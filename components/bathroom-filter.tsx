import React from "react";
import { use, useState } from "react";

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
        <div>
            {/* The following is heavily inspired by the old page.tsx contributed by Akemi */}
            <label>
                Campus:
                <select
                value={filters.campus}
                onChange={(e) => setFilters({ ...filters, campus: e.target.value, building: "" })}
                >
                <option value="">All</option>
                {campusOptions.map((campus) => (
                    <option key={campus} value={campus}>
                    {campus}
                    </option>
                ))}
                </select>
            </label>

            <label>
                Building:
                <select
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
                </select>
            </label>

            <label>
                Gender:
                <select onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
                <option value="">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Gender Neutral">Gender Neutral</option>
                </select>
            </label>

            <label>
                Accessible:
                <select onChange={(e) => setFilters({ ...filters, accessible: e.target.value })}>
                <option value="">All</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
                </select>
            </label>
        </div>
    )
}