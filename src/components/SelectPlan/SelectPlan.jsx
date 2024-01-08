import React from "react";
import BillingToggle from "./BillingToggle";
//import PlanCard from "./PlanCard";
//TODO: onHover highlight on buttons
function SelectPlan({ formData, handleFormChange }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Select your plan</h1>
      <p className="text-gray-400 mb-8">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex justify-between mb-5">
        <button
          className={`w-44 flex flex-col justify-between p-5 border-2 rounded-lg hover:border-purplish-blue ${
            formData.plan == "Arcade" ? "bg-gray-50 border-purplish-blue" : ""
          }`}
          name="plan"
          value="Arcade"
          onClick={(event) => handleFormChange(event)}
        >
          <img
            src="/assets/images/icon-arcade.svg"
            alt="arcade icon"
            width={50}
          />
          <div className="flex flex-col items-start mt-12">
            <strong>Arcade</strong>
            <p className="text-gray-400">
              {formData.billing == "Monthly" ? "$9/mo" : "$90/year"}
            </p>
            {formData.billing == "Yearly" && (
              <p className="bold">2 months free</p>
            )}
          </div>
        </button>

        <button
          className={`w-44 flex flex-col justify-between p-5 border-2 rounded-lg hover:border-purplish-blue ${
            formData.plan == "Advanced" ? "bg-gray-50 border-purplish-blue" : ""
          }`}
          name="plan"
          value="Advanced"
          onClick={(event) => handleFormChange(event)}
        >
          <img
            src="/assets/images/icon-advanced.svg"
            alt="arcade icon"
            width={50}
          />
          <div className="flex flex-col items-start mt-12">
            <strong>Advanced</strong>
            <p className="text-gray-400">
              {formData.billing == "Monthly" ? "$12/mo" : "$120/year"}
            </p>
            {formData.billing == "Yearly" && (
              <p className="bold">2 months free</p>
            )}
          </div>
        </button>

        <button
          className={`w-44 flex flex-col justify-between p-5 border-2 rounded-lg hover:border-purplish-blue ${
            formData.plan == "Pro" ? "bg-gray-50 border-purplish-blue" : ""
          }`}
          name="plan"
          value="Pro"
          onClick={(event) => handleFormChange(event)}
        >
          <img src="/assets/images/icon-pro.svg" alt="arcade icon" width={50} />
          <div className="flex flex-col items-start mt-12">
            <strong>Pro</strong>
            <p className="text-gray-400">
              {formData.billing == "Monthly" ? "$15/mo" : "$150/year"}
            </p>
            {formData.billing == "Yearly" && (
              <p className="bold">2 months free</p>
            )}
          </div>
        </button>
      </div>

      <BillingToggle formData={formData} handleFormChange={handleFormChange} />
    </>
  );
}

export default SelectPlan;
