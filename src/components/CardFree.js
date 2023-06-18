import * as React from "react";

export default function CardFree() {
  return (
    <div>
      <div className="bg-white h-auto w-80 py-6 rounded-3xl shadow-md border-gray-100  border">
        <div className=" h-14 flex items-center justify-center">
          <h1 className=" font-semibold text-2xl tracking-wide">Free</h1>
        </div>

        <div className=" h-14 flex items-center justify-center">
          <p className=" font-medium text-gray-400">
            <span className=" font-semibold text-3xl text-violet-700">
              $0.00
            </span>
            /Month
          </p>
        </div>

        <div className=" h-14 w-full flex items-center justify-start px-14">
          <p className=" text-sm font-md text-gray-400 tracking-wide">
            Casual Users and Individuals with basic needs.
          </p>
        </div>

        <div className=" h-10 flex items-center justify-center">
          <div className="bg-gray-100  h-px w-full "></div>
        </div>

        <div className=" h-auto py-2 px-11">
          <ul className="grid gap-1">
            <li className="text-violet-700 font-semibold">
              <span className="p-3">
                <i class="bi bi-check-circle-fill text-violet-700"></i>
              </span>
              Essential Features
            </li>

            <li className="text-gray-300">
              <span className="p-3">
                <i class="bi bi-check-circle text-gray-300"></i>
              </span>
              No Offline Access
            </li>

            <li className="text-gray-300">
              <span className="p-3">
                <i class="bi bi-check-circle text-gray-300"></i>
              </span>
              Limited Support
            </li>

            <li className="text-gray-300">
              <span className="p-3">
                <i class="bi bi-check-circle text-gray-300"></i>
              </span>
              Limited Storage
            </li>

            <li className="text-gray-300">
              <span className="p-3">
                <i class="bi bi-check-circle text-gray-300"></i>
              </span>
              No Advertisements
            </li>
          </ul>
        </div>

        <div className=" h-10 flex items-center justify-center">
          <div className="bg-gray-100  h-px w-full "></div>
        </div>

        <div className=" h-14 flex items-center justify-center">
          <button className="bg-violet-700 text-white font-semibold w-64 h-12 rounded-xl shadow-md">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
}
