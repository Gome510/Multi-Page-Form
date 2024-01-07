import { useState } from "react";
import "./App.css";
import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import Addons from "./components/Addons";
import Summary from "./components/Summary";
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

  let formComponent = <YourInfo />;
  switch (step) {
    case 1:
      formComponent = <YourInfo />;
      break;
    case 2:
      formComponent = <SelectPlan />;
      break;
    case 3:
      formComponent = <Addons />;
      break;
    case 4:
      formComponent = <Summary />;
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

          <div className="absolute bottom-0 flex w-full justify-between">
            <button
              className="text-gray-400"
              type="button"
              onClick={() => setStep(step - 1)}
            >
              Go Back
            </button>
            <button
              type="button"
              className=" bg-black text-white p-3 rounded-lg pl-6 pr-6"
              onClick={() => setStep(step + 1)}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
