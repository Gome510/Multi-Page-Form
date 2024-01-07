import React from "react";

function StepCard({ number = 1, name = "", active = false }) {
  const activeIconStyles =
    "w-10 h-10 rounded-full bg-light-blue flex items-center justify-center font-bold mr-4";
  const disabledIconStyles =
    "w-10 h-10 rounded-full bg-transparent border text-white flex items-center justify-center font-bold mr-4";
  return (
    <div className="flex items-center mb-8">
      <div className={active ? activeIconStyles : disabledIconStyles}>
        {number}
      </div>
      <div>
        <p className="text-gray-400">STEP {number}</p>
        <strong className="text-white tracking-widest">
          {name.toUpperCase()}
        </strong>
      </div>
    </div>
  );
}

export default StepCard;
