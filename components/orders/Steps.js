"use client";

import { useRouter } from "next/navigation";

export default function Steps({ currentStep = 1 }) {
  const router = useRouter();

  const steps = [
    { number: 1, label: "Peržiūrėti krepšelį", description: "Patikrinkite užsakymą", path: "/orders" },
    { number: 2, label: "Kontaktinė forma", description: "Įveskite savo duomenis", path: "/checkout" },
    { number: 3, label: "Patvirtinimas", description: "Susisieksime artimiausiu metu", path: "/confirmation" },
  ];

  const handleStepClick = (step) => {
    // Jei tai praeitas žingsnis ir ne baigiamasis - leidžiam spausti
    if (currentStep > step.number && step.path) {
      router.push(step.path);
    }
    // Jeigu current step ir nori refresh / optional
    if (currentStep === step.number && step.path) {
      router.push(step.path);
    }
  };

  return (
    <div className="flex justify-between items-center mb-16 relative">
      {steps.map((step, index) => {
        const isActive = currentStep === step.number;
        const isCompleted = currentStep > step.number;
        const handleStepClick = (step) => {
            // Jei esame paskutiniame žingsnyje, mygtukai išjungti
            if (currentStep === 3) {
              return;
            }
          
            // Jei tai praeitas žingsnis ir ne baigiamasis - leidžiam spausti
            if (currentStep > step.number && step.path) {
              router.push(step.path);
            }
          
            // Jei tai tas pats žingsnis — optional: gali refresh'inti
            if (currentStep === step.number && step.path) {
              router.push(step.path);
            }
          };

          
        return (
          <div
            key={step.number}
            className="flex-1 flex flex-col items-center relative cursor-pointer group"
            onClick={() => handleStepClick(step)}
          >
            {/* Progres linija */}
            {index !== steps.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 w-full h-[2px] transition-colors duration-300 ${
                  isCompleted ? "bg-[#D9480F]" : "bg-gray-300"
                }`}
              />
            )}

            {/* Step numeris / ikona */}
            <div
              className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold z-10 transition-colors duration-300 ${
                isActive || isCompleted ? "bg-[#D9480F]" : "bg-gray-300"
              } ${
                isCompleted ? "group-hover:bg-[#b53c0c]" : ""
              }`}
            >
              {step.number}
            </div>

            {/* Step tekstas */}
            <div className=" text-xs md:text-sm mt-2 text-center h-10">
              <div className={`${isActive ? "font-bold text-brown" : "text-gray-600"} transition-colors duration-300`}>
                {step.label}
              </div>
              <div className="text-gray-500 text-xs">{step.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
