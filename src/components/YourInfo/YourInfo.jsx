import React from "react";

function YourInfo({ formData, handleFormChange }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Personal info</h1>
      <p className="text-gray-400 mb-8">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col">
        <label className="mb-1" htmlFor="name">
          Name
        </label>
        <input
          required
          id="name"
          name="name"
          value={formData.name}
          onChange={() => handleFormChange(event)}
          className="border-2 p-2 rounded-lg mb-4 focus:outline-purplish-blue"
          type="text"
          placeholder="e.g. Stephen King"
        />
        <label className="mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          required
          name="email"
          value={formData.email}
          onChange={() => handleFormChange(event)}
          className="border-2 p-2 rounded-lg mb-4 focus:outline-purplish-blue"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label className="mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          required
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={() => handleFormChange(event)}
          className="border-2 p-2 rounded-lg mb-4 focus:outline-purplish-blue"
          type="text"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </>
  );
}

export default YourInfo;
