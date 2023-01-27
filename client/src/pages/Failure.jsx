import React from "react";

export const Failure = () => {
  return (
    <div class="flex flex-col justify-center items-center h-screen p-4 text-red-700 bg-red-100">
      <div class="w-full text-3xl text-center">Operación fallida</div>
      <div class="px-10 mt-4 text-center">
        No hemos podido procesar tu pago, intenta nuevamente
      </div>
      <svg
        style={{ maxWidth: 500, display: "block", margin: "auto" }}
        class="mt-6 text-red-500 h-20 w-20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};
