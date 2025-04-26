export default function UniversalInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  name,
  labelClassName,
  h = false, // <- naujas propsas
}) {
  if (h) {
    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute left-[-9999px]"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="text-sm md:text-base">
      {label && (
        <label className={`block text-brown mb-1 ${labelClassName}`}>{label}</label>
      )}
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
