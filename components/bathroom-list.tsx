import React from "react";
import BathroomCard from "./ bathroom-card";
import { restroom } from "@/types";
import { useState, useEffect } from "react";
import { getRestrooms } from "@/lib/getAllRestrooms";

type BathroomListProps = {
    filters : {
        campus: string,
        building: string,
        gender: string,
        accessible: string,
    };
};

export default function BathroomList( {filters}: BathroomListProps ) {
    const [restrooms, setRestrooms] = useState<restroom[]>([]);
    const [loading, setLoading] = useState(true);

    // heaviliy inspired by Akemi's old page.tsx
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-yellow-200">
          {restrooms.map((restroom_instance) => (
            <div
              key={restroom_instance.id}
              className="bg-sky-200 shadow-md rounded-lg border border-gold-300 p-4 hover:shadow-lg transition-shadow"
            >
              <BathroomCard restroom={restroom_instance} />
            </div>
          ))}
        </div>
      );
}