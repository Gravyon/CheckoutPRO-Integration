import React from "react";

export const Success = () => {
  return (
    <div class="flex flex-col p-4 items-center text-green-700 bg-green-100 overflow-y-scroll">
      <div class="w-full mt-10 text-3xl text-center">Operación completada</div>
      <div class="px-10 mt-4 text-center">
        Tu compra ha sido realizada correctamente!
      </div>
      <div class="mt-6 text-green-500 h-20 w-20">
        <svg
          style={{ maxWidth: 500, display: "block", margin: "auto" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* <div class="flex flex-col mt-20 text-gray-700 w-full max-w-sm">
      <div class="font-bold mb-4">Data received:</div>
      <!--  -->
      <div class="px-4 py-2 border border-green-500 rounded mb-2">
        Collection ID: {{ q.collection_id }}
      </div>
      <!--  -->
      <div class="px-4 py-2 border border-green-500 rounded mb-2">
        Collection status: {{ q.collection_status }}
      </div>
      <!--  -->
      <div class="px-4 py-2 border border-green-500 rounded mb-2">
        External reference: {{ q.external_reference }}
      </div>
      <!--  -->
      <div class="px-4 py-2 border border-green-500 rounded mb-2">
        Payment type: {{ q.payment_type }}
      </div>
      <!--  -->
      <div class="px-4 py-2 border border-green-500 rounded mb-2">
        Preference id: {{ q.preference_id }}
      </div>
      <!--  -->
      <div class="px-4 py-2 border border-green-500 rounded mb-2">
        Site id: {{ q.site_id }}
      </div>
      <!--  -->
      <div class="px-4 py-2 border border-green-500 rounded mb-2">
        Processing mode: {{ q.processing_mode }}
      </div>
      <!--  -->
      <div class="px-4 py-2 border border-green-500 rounded mb-2">
        Merchant account id: {{ q.merchant_account_id }}
      </div>
      <!--  -->
    </div> */}
    </div>
  );
};
