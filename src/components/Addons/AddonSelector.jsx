import React from "react";

function AddonSelector({ billing, checked, handleFormChange, info, price }) {
  return (
    <button
      name="addons"
      value={info.title}
      type="button"
      className={`w-full flex border-2 items-center justify-between rounded-lg p-6 hover:border-purplish-blue ${
        checked ? "border-purplish-blue bg-gray-50" : ""
      }`}
      onClick={(event) => handleFormChange(event)}
    >
      <div className="flex gap-6">
        <input readOnly type="checkbox" className="w-6" checked={checked} />
        <div className="flex flex-col text-left">
          <strong>{info.title}</strong>
          <p className="text-gray-400">{info.subtitle}</p>
        </div>
      </div>

      <p className="text-purplish-blue">
        {billing == "Monthly" ? `+$${price}/mo` : `+$${price * 10}/yr`}
      </p>
    </button>
  );
}

export default AddonSelector;
