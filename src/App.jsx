import { useState } from "react";

import "./App.css";

function App() {
  return (
    <section className="w-4/5 rounded-lg bg-white shadow-lg p-5 flex items-center font-ubuntu text-base">
      <div className="bg-sidebar h-sidebar w-sidebar p-10">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-light-blue flex items-center justify-center font-bold mr-4">
            1
          </div>
          <div>
            <p className="text-gray-400">STEP 1</p>
            <strong className="text-white tracking-widest">YOUR INFO</strong>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-transparent border text-white flex items-center justify-center font-bold mr-4">
            1
          </div>
          <div>
            <p className="text-gray-400">STEP 2</p>
            <strong className="text-white tracking-widest">SELECT PLAN</strong>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-transparent border text-white flex items-center justify-center font-bold mr-4">
            1
          </div>
          <div>
            <p className="text-gray-400">STEP 3</p>
            <strong className="text-white tracking-widest">ADD-ONS</strong>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-transparent border text-white flex items-center justify-center font-bold mr-4">
            1
          </div>
          <div>
            <p className="text-gray-400">STEP 4</p>
            <strong className="text-white tracking-widest">SUMMARY</strong>
          </div>
        </div>
      </div>
      <div className="h-sidebar w-full flex justify-center ">
        <div className="relative mt-10 m-5">
          <h1 className="text-3xl font-bold mb-2">Personal info</h1>
          <p className="text-gray-400 mb-8">
            Please provide your name, email address, and phone number.
          </p>
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="border-2 p-2 rounded-lg mb-4"
              type="text"
              placeholder="e.g. Stephen King"
            />
            <label className="mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="border-2 p-2 rounded-lg mb-4"
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
            />
            <label className="mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              className="border-2 p-2 rounded-lg mb-4"
              type="text"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
          <button
            type="button"
            className="absolute right-0 bottom-0 bg-black text-white p-3 rounded-lg pl-6 pr-6"
          >
            Next Step
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
