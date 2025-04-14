export default function UniversalInput({ label, value, onChange, placeholder, error, type = "text", name, labelClassName }) {
    return (
      <div className="text-sm md:text-base">
        <label className={`block text-brown mb-1 ${labelClassName}`}>{label}</label>
        <input
          type={type}
          name={name}
          className={`w-full border rounded-md px-4 py-2 ${error ? "border-red-500" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
  