import React, { useState } from "react";
import { api } from "../api";

export default function SearchBar({ setResults }) {

 const [query, setQuery] = useState("");

 const search = async () => {

  const res = await api.post("/search", { query });

  setResults(res.data);
 };

 return (
  <div>
   <input
    value={query}
    onChange={(e)=>setQuery(e.target.value)}
   />
   <button onClick={search}>Search</button>
  </div>
 );
}