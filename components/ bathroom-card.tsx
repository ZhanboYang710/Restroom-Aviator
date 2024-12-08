import React from "react";
import Link from "next/link";
import { restroom } from "../types";

type BathroomProps = {
    restroom: restroom;
};

export default function BathroomCard( { restroom }: BathroomProps) {
    return (
        <>
        <Link href={`/restroom/${restroom.id}`}>
            <div style={{ cursor: "pointer", border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
                <h2>{restroom.building}</h2>
                <p>Floor: {restroom.floor}</p>
                <p>Gender: {restroom.gender}</p>
                <p>Accessible: {restroom.accessible ? "Yes" : "No"}</p>
                <p>Overall Rating: {restroom.ratings?.overall || "N/A"}</p>
            </div>
        </Link>
        </>
    )
}