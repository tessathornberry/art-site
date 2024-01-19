"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [name, setName] = useState<string>();
  useEffect(() => {
    fetch("/api/identifyUser")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);
  return (
    <div>
      <div>
        API Route from <span>Client</span>
      </div>
      <div>Name: {name}</div>
    </div>
  );
}
