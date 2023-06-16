function App() {
  return (
    <section className="w-full h-screen bg-white">
      <div className=" absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
        <div className="">
          {/* grid grid-rows-3 gap-2 */}
          <div className="bg-white h-auto w-72 py-6 rounded-2xl shadow-md border-slate-50 border">
            <div className=" h-10 flex items-center justify-center">
              <h1 className=" font-medium text-2xl">Standard</h1>
            </div>

            <div className=" h-14 flex items-center justify-center">
              <p className=" font-medium text-slate-400">
                <span className=" font-bold text-3xl text-violet-700">
                  $0.99
                </span>
                /month
              </p>
            </div>

            <div className=" h-14 w-full flex items-center justify-center ">
              <p className=" text-sm font-semibold text-slate-400">
                For low budget,{<br></br>} Individual accounts
              </p>
            </div>

            <div className=" h-10 flex items-center justify-center">
              <div className="bg-slate-50 h-px w-full "></div>
            </div>

            <div className=" h-40 flex items-center justify-center">
              <ul className=" list-disc flex flex-col items-center justify-start">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
                <li>Option 5</li>
              </ul>
            </div>

            <div className=" h-10 flex items-center justify-center">
              <div className="bg-slate-50 h-px w-full "></div>
            </div>

            <div className=" h-14 flex items-center justify-center">
              <button className="bg-violet-700 text-white font-semibold px-12 py-2 rounded-xl shadow-md">
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
