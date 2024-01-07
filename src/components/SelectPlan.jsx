import React from "react";

function SelectPlan() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Select your plan</h1>
      <p className="text-gray-400 mb-8">
        You have the option of monthly or yearly billing.
      </p>

      <div className="w-full flex">
        <div className="w-48 h-52 flex flex-col justify-between p-5 border rounded-lg">
          <img
            src="/assets/images/icon-arcade.svg"
            alt="arcade icon"
            width={50}
          />
          <div className=" flex flex-col">
            <strong>Arcade</strong>
            <p className="text-gray-400">$9/mo</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectPlan;
