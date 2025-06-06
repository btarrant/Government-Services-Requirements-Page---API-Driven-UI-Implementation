"use client";

import { useEffect, useState } from "react";
import { PassportRequirement } from "./api/passport/requirements/route";

export default function Home() {
  const [requirements, setRequirements] = useState<PassportRequirement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const res = await fetch("/api/passport/requirements");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setRequirements(data);
      } catch (err) {
        setError("Failed to load requirements");
      } finally {
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Loading requirements...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 bg-white flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        HelloGov Interview
      </h1>

      <p className="text-xl text-center text-gray-600 mb-12">
        Please implement the requirements as described by the interviewer.
      </p>

      <ul className="space-y-6">
        {requirements.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span role="img" aria-label={item.icon}>📌</span> {item.title}
            </h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
