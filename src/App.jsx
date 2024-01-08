import { useState } from "react";
import "./App.css";
import YourInfo from "./components/YourInfo/YourInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import Addons from "./components/Addons/Addons";
import Summary from "./components/Summary/Summary";
import StepCard from "./components/Sidebar/StepCard";
function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    billing: "Monthly",
    addons: [],
  });

  function handleFormChange(event) {
    if (event.target.name == undefined) return;

    let newFormData = {};
    if (event.target.name == "billing") {
      const newValue = event.target.checked ? "Monthly" : "Yearly";
      newFormData = {
        ...formData,
        [event.target.name]: newValue,
      };
    } else if (event.target.name == "addons") {
      let newAddons = [];
      if (formData.addons.includes(event.target.value)) {
        newAddons = formData.addons.filter(
          (addon) => addon != event.target.value
        );
      } else {
        newAddons = [...formData.addons];
        newAddons.push(event.target.value);
      }
      newFormData = {
        ...formData,
        [event.target.name]: newAddons,
      };
    } else {
      newFormData = {
        ...formData,
        [event.target.name]: event.target.value,
      };
    }

    setFormData(newFormData);
  }

  console.log(formData);

  let formComponent = (
    <YourInfo formData={formData} handleFormChange={handleFormChange} />
  );
  switch (step) {
    case 1:
      formComponent = (
        <YourInfo formData={formData} handleFormChange={handleFormChange} />
      );
      break;
    case 2:
      formComponent = (
        <SelectPlan formData={formData} handleFormChange={handleFormChange} />
      );
      break;
    case 3:
      formComponent = (
        <Addons formData={formData} handleFormChange={handleFormChange} />
      );
      break;
    case 4:
      formComponent = (
        <Summary formData={formData} handleFormChange={handleFormChange} />
      );
      break;
  }

  return (
    <section className="w-section rounded-lg bg-white shadow-lg p-5 flex items-center font-ubuntu text-base">
      <div className="bg-sidebar h-sidebar w-sidebar p-10">
        <StepCard name="Your Info" number={1} active={step == 1} />
        <StepCard name="Select Plan" number={2} active={step == 2} />
        <StepCard name="Add-ons" number={3} active={step == 3} />
        <StepCard name="Summary" number={4} active={step == 4} />
      </div>

      <div className="h-sidebar w-full flex justify-center ">
        <div className="relative mt-10 m-5 w-form">
          {formComponent}

          <div className="absolute bottom-0 flex flex-row-reverse w-full justify-between">
            <button
              type="button"
              className="bg-marine-blue text-white p-3 rounded-lg pl-6 pr-6"
              onClick={() => setStep(step + 1)}
            >
              Next Step
            </button>
            {step != 1 && (
              <button
                className="text-gray-400 hover:text-marine-blue"
                type="button"
                onClick={() => setStep(step - 1)}
              >
                Go Back
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
