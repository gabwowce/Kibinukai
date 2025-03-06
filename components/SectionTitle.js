export default function SectionTitle({ title, subtitle, className = "", primaryColor }) {
    return (
      <div className={`text-center py-4 ${className}`}>
        <h2 className={`font-bold font-display mb-2 ${primaryColor ? "text-outrageous-orange-400" : "text-brown"}`}>{title}</h2>
        {subtitle && <p className="text-gray-700 text-sm max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    );
  }
 