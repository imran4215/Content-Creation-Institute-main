import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center items-start px-3 py-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe0eaVV__9IL7fPF42n5LdfujB1yXhyrfgXVVaQiv2VLHvDXA/viewform?embedded=true"
          className="w-full h-[90vh] border-0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
