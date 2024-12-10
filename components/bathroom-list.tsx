
// contributed by Zhanbo
// restroom list display component

import React from "react";
import BathroomCard from "./bathroom-card";
import { restroom } from "@/types";
import { useState, useEffect } from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    // create a wrapping of the cards
  gap: 1rem;
  background-color: black;
  padding: 1rem;
`;

const StyledDiv = styled.div`
  border-radius: 0.5rem;
  border-width: 1px;
  background-color: #2c3e50; /* Match the background color of the About page */
  padding: 0.3rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0, 0, 0, 0.1), 0 4px 6px -4px rgb(0, 0, 0, 0.1);
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

// Define the type for the component props
type BathroomListProps = {
    filters : {
        campus: string,
        building: string,
        gender: string,
        accessible: string,
    };
};


// retrieve restrooms based on selected filters

export default function BathroomList( {filters}: BathroomListProps ) {
    const [restrooms, setRestrooms] = useState<restroom[]>([]);
    const [loading, setLoading] = useState(true);

    // heaviliy inspired by Akemi's old page.tsx

    // useEffect() function that handles the retriving of data
    // records, subject to changes of filters

    useEffect( () => {
        async function fetchRestrooms() {
            try {
              const query = new URLSearchParams(filters).toString();
              const response = await fetch(`/api/bathrooms?${query}`);
              if (!response.ok) throw new Error("Network response was not ok");
              const data = await response.json();
              setRestrooms(data);
            } catch (error) {
              console.error("Failed to fetch restrooms:", error);
            } finally {
              setLoading(false);
            }
        };

        fetchRestrooms();
    }, [filters]
    );

    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (restrooms.length === 0) {
    return <p>No restrooms found</p>;
    }

    return (
        <StyledContainer>
            {/* generate the list by mapping function taking selected restrooms
            and create a Card for each of them */}
            {restrooms.map((restroom_instance) => (
                <StyledDiv key={restroom_instance.id}>
                    <BathroomCard restroom={restroom_instance} />
                </StyledDiv>
          ))}
        </StyledContainer>
    );
}
