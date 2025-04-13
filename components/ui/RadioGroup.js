export default function RadioGroup({ name, options = [], value, onChange, label, extraContent }) {
    return (
      <div>
        {label && (
          <div className="flex items-center mb-2">
            <label className="block text-brown font-medium">{label}</label>
            {extraContent && <div className="ml-2">{extraContent}</div>}
          </div>
        )}
        <div className="flex flex-col space-y-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 inline-flex items-center justify-center mr-3 rounded-full border-2 transition-colors duration-200 ${
                  value === option.value ? "bg-[#D9480F] border-[#D9480F]" : "border-gray-400"
                }`}
              >
                {value === option.value && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  }
  