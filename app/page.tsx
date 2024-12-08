"use client";
import { useEffect, useState } from "react";
import { restroom } from "../types"; // Adjust the import path as needed

const campusOptions = ["East", "Central", "South", "West"];
const buildingOptions = {
  East: ["Towers"],
  Central: ["CAS", "GSU", "Warren"],
  South: ["Photonics"],
  West: ["CGS", "West Dining Hall"],
};

export default function Page() {
  const [restrooms, setRestrooms] = useState<restroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    campus: "",
    building: "",
    gender: "",
    accessible: "",
  });
  const [selectedRestroom, setSelectedRestroom] = useState<restroom | null>(null);

  useEffect(() => {
    async function fetchRestrooms() {
      try {
        const query = new URLSearchParams(filters).toString();
        const response = await fetch(`/api/bathrooms?${query}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRestrooms(data);
      } catch (error) {
        console.error("Failed to fetch restrooms:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRestrooms();
  }, [filters]);

  const handleRestroomClick = (restroom: restroom) => {
    setSelectedRestroom(restroom);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, padding: "10px", width: "50%", overflowY: "auto" }}>
        <div>
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
                buildingOptions[filters.campus as keyof typeof buildingOptions].map((building) => (
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

        {/* Display Bathrooms */}
        <div>
          {restrooms.length > 0 ? (
            restrooms.map((restroom) => (
              <div
                key={restroom.id}
                style={{ cursor: "pointer", border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}
                onClick={() => handleRestroomClick(restroom)}
              >
                <h2>{restroom.building}</h2>
                <p>Location: {restroom.location}</p>
                <p>Floor: {restroom.floor}</p>
                <p>Gender: {restroom.gender}</p>
                <p>Accessible: {restroom.accessible ? "Yes" : "No"}</p>
                <p>Overall Rating: {restroom.ratings?.overall || 'N/A'}</p>
                <p>Number of Ratings: {restroom.ratingCount}</p>
              </div>
            ))
          ) : (
            <p>No restrooms found</p>
          )}
        </div>
      </div>

      {/* Display Selected Restroom Details */}
      {selectedRestroom && (
        <div style={{ flex: 1, padding: "10px", borderLeft: "2px solid #ccc", width: "50%", position: "fixed", right: 0, top: 0, height: "100%", overflowY: "auto", backgroundColor: "#000", color: "#fff" }}>
          <h2>Details for {selectedRestroom.building} - {selectedRestroom.location}</h2>
          <p><strong>Campus:</strong> {selectedRestroom.campus}</p>
          <p><strong>Building:</strong> {selectedRestroom.building}</p>
          <p><strong>Floor:</strong> {selectedRestroom.floor}</p>
          <p><strong>Gender:</strong> {selectedRestroom.gender}</p>
          <p><strong>Accessible:</strong> {selectedRestroom.accessible ? "Yes" : "No"}</p>
          <p><strong>Odor:</strong> {selectedRestroom.ratings.odor || "N/A"}</p>
          <p><strong>Cleanliness:</strong> {selectedRestroom.ratings.cleanliness || "N/A"}</p>
          <p><strong>Privacy:</strong> {selectedRestroom.ratings.privacy || "N/A"}</p>
          <p><strong>Overall Rating:</strong> {selectedRestroom.ratings.overall || "N/A"}</p>
          <p><strong>Number of Ratings:</strong> {selectedRestroom.ratingCount}</p>
          <p><strong>Reviews:</strong> {selectedRestroom.reviews.length > 0 ? selectedRestroom.reviews.map(review => review.comment).join(", ") : "No reviews yet"}</p>
        </div>
      )}
    </div>
  );
}


