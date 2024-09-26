import { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="flex justify-center">
        <p className="text-7xl font-bold">{counter}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="inline-flex">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => setCounter(counter - 1)}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => setCounter(0)}
          >
            <i className="fa-solid fa-rotate-left"></i>
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => setCounter(counter + 1)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};
