import React from "react";

function BillingToggle({ formData, handleFormChange }) {
  return (
    <div className="rounded-lg bg-gray-100 p-5 flex justify-center gap-5">
      <p
        className={`font-bold ${
          formData.billing == "Monthly" ? "" : "text-gray-400"
        }`}
      >
        Monthly
      </p>

      <input
        type="checkbox"
        id="check"
        className="toggle"
        name="billing"
        onClick={(event) => handleFormChange(event)}
      />
      <label htmlFor="check"></label>

      <p
        className={`font-bold ${
          formData.billing == "Yearly" ? "" : "text-gray-400"
        }`}
      >
        Yearly
      </p>
    </div>
  );
}

export default BillingToggle;
