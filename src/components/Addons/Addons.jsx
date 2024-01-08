import React from "react";
import AddonSelector from "./AddonSelector";
import addonData from "../../assets/addons.json";
const addonKeys = Object.keys(addonData);

function Addons({ formData, handleFormChange }) {
  const addons = addonKeys.map((addon) => (
    <AddonSelector
      key={addon}
      billing={formData.billing}
      checked={formData.addons.includes(addon)}
      info={{
        title: addon,
        subtitle: addonData[addon].description,
      }}
      price={addonData[addon].monthlyPrice}
      handleFormChange={handleFormChange}
    />
  ));

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Pick add-ons</h1>
      <p className="text-gray-400 mb-8">
        Add-ons help enhance your gaming experience
      </p>

      <div className="w-full flex flex-col gap-4">{addons}</div>
    </>
  );
}

export default Addons;
