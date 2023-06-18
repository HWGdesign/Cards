import * as React from "react";

export default function CardStandard() {
  return (
    <div>
      <div className="bg-white h-auto w-80 py-8 rounded-3xl shadow-xl shadow-violet-200  border-gray-100 border relative">
        <div className="absolute top-0 -right-10 bg-violet-700 text-white -translate-x-1/2 -translate-y-1/2  w-28 h-8 flex items-center justify-center rounded-2xl shadow-lg shadow-violet-400 font-semibold">
          Best seller!
        </div>

        <div className=" h-14 flex items-center justify-center">
          <h1 className=" font-semibold tracking-wide text-2xl">Standard</h1>
        </div>

        <div className=" h-14 flex items-center justify-center">
          <p className=" font-medium text-gray-400">
            <span className=" font-semibold text-3xl text-violet-700">
              $9.99
            </span>
            /Month
          </p>
        </div>

        <div className=" h-14 w-full flex items-center justify-start px-14">
          <p className=" text-sm font-md text-gray-400 tracking-wide">
            Small-sized Businesses and demanding individuals.
          </p>
        </div>

        <div className=" h-10 flex items-center justify-center">
          <div className=" bg-gray-100 h-px w-full "></div>
        </div>

        <div className=" h-auto py-2 px-11">
          <ul className="grid gap-1">
            <li className="text-violet-700 font-semibold">
              <span className="p-3">
                <i class="bi bi-check-circle-fill text-violet-700"></i>
              </span>
              Advanced Features
            </li>

            <li className="text-violet-700 font-semibold">
              <span className="p-3">
                <i class="bi bi-check-circle-fill text-violet-700 "></i>
              </span>
              Increased Storage
            </li>

            <li className="text-violet-700 font-semibold">
              <span className="p-3">
                <i class="bi bi-check-circle-fill text-violet-700 "></i>
              </span>
              Priority Support
            </li>

            <li className="text-gray-400">
              <span className="p-3">
                <i class="bi bi-check-circle text-gray-400"></i>
              </span>
              No Team Collaboration
            </li>

            <li className="text-gray-400">
              <span className="p-3">
                <i class="bi bi-check-circle text-gray-400"></i>
              </span>
              No Advertisements
            </li>
          </ul>
        </div>

        <div className=" h-10 flex items-center justify-center">
          <div className=" bg-gray-100 h-px w-full "></div>
        </div>

        <div className=" h-14 flex items-center justify-center">
          <button className="bg-violet-700 text-white font-semibold w-64 h-12 rounded-xl shadow-md">
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
}
