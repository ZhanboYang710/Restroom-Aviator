"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {MiniHeader} from "@/components/header";

const DynamicPage = () => {
    const pathname = usePathname();
    const id = pathname.split("/").pop(); // Extract the dynamic ID from the pathname
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/bathrooms?id=${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!data) {
        return <p>No data available for this restroom.</p>;
    }

    return (
        <div style={{ padding: "2rem" }}>
            <MiniHeader/>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>
                <strong>Location:</strong> {data.location}
            </p>
            <p>
                <strong>Facilities:</strong>{" "}
                {Array.isArray(data.facilities)
                    ? data.facilities.join(", ")
                    : "No facilities listed"}
            </p>
            <p>
                <strong>Rating:</strong> {data.rating} / 5
            </p>
        </div>
    );
};

export default DynamicPage;
