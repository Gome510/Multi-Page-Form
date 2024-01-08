import React from "react";
import planData from "../../assets/plans.json";
function Summary({ formData, handleFormChange }) {
  const plan = planData[formData.plan];
  let price = plan.monthlyPrice;
  let billAbrv = "mo";
  if (formData.billing != "Monthly") {
    price = price * 10;
    billAbrv = "yr";
  }

  const addons = formData.addons.map((addon) => (
    <div key={addon} className="flex justify-between">
      <p className="text-gray-400">{addon}</p>
      <p>{`+$${price}/${billAbrv}`}</p>
    </div>
  ));

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Finishing Up</h1>
      <p className="text-gray-400 mb-8">
        Double-check everything looks OK before confirming
      </p>

      <div className="flex flex-col gap-6 bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div>
            <strong>{`${formData.plan} (${formData.billing})`}</strong>
            <p>
              <a
                href=""
                className="text-gray-400 underline hover:text-purplish-blue"
              >
                Change
              </a>
            </p>
          </div>
          <strong>{`$${price}/${billAbrv}`}</strong>
        </div>

        <hr />
        {addons}

        <div className="flex justify-between">
          <p className="text-gray-400">{`Total (per ${
            formData.billing == "Monthly" ? "month" : "year"
          })`}</p>
          <strong className="text-xl text-purplish-blue">{`+$${price}/${billAbrv}`}</strong>
        </div>
      </div>
    </>
  );
}

export default Summary;
