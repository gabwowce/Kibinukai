import React from "react";

export default function SectionHeader({ title, icon: Icon, description, brown }) {
  return (
    <div className="py-4">
      <h2 className=" font-bold text-brown flex items-center">
        {title}
      </h2>
      {description && (
        <p className="flex flex-row items-center pt-2">
          <Icon size={32} className={`mr-2 ${brown ? "text-brown" : "text-outrageous-orange-400"}`}/>
          {description}
        </p>
      )}
    </div>
  );
}
