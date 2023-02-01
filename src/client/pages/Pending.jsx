import React from "react";

export const Pending = () => {
  return (
    <div class="flex flex-col justify-center items-center h-screen p-4 text-yellow-700 bg-yellow-100">
      <div class="w-full text-3xl text-center">Operación pendiente</div>
      <div class="px-10 mt-4 text-center">
        Tu pago esta pendiente de pago, te avisaremos cuando se complete...
      </div>
      <svg
        style={{ maxWidth: 500, display: "block", margin: "auto" }}
        class="mt-6 text-yellow-500 h-20 w-20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};
