"use client";

// Goals
// 1) Fetch and display passport renewal requirements from the provided API
// 2) Match the layout and styling from the Figma design
// 3) Add appropriate loading state while data is being fetched
// 4) Add appropriate error state when fetch fails

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 bg-white flex flex-1 flex-col ">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        HelloGov Interview
      </h1>

      <p className="text-xl text-center text-gray-600 mb-12">
        Please implement the requirements as described by the interviewer.
      </p>
    </main>
  );
}
