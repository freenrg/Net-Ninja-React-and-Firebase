import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

export default function TripList() {
    const [url, setUrl] = useState("http://localhost:3001/trips");
    const { data: trips, isPending, error } = useFetch(url);

    return (
        <div className='trip-list'>
            <h2>TripList</h2>
            {isPending && <div>Loading trips...</div>}
            {error && <div>{error}</div>}
            <ul>
                {trips &&
                    trips.map(trip => (
                        <li key={trip.id}>
                            <h3>{trip.title}</h3>
                            <p>{trip.price}</p>
                        </li>
                    ))}
            </ul>
            <div className='filters'>
                <button
                    onClick={() =>
                        setUrl("http://localhost:3001/trips?loc=europe")
                    }
                >
                    European Trips
                </button>
                <button
                    onClick={() =>
                        setUrl("http://localhost:3001/trips?loc=america")
                    }
                >
                    American Trips
                </button>
                <button onClick={() => setUrl("http://localhost:3001/trips")}>
                    All Trips
                </button>
            </div>
        </div>
    );
}
