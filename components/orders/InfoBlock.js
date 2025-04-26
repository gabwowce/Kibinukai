import React from "react";

export default function InfoBlock({ icon: Icon, title, description, brown }) {
  return (
    <div className="bg-orange-100 p-6 rounded-[24px] flex flex-row items-startjustify-end shadow-custom">
        <Icon size={32} className={`mr-3 mt-1 ${brown ? "text-brown" : "text-outrageous-orange-400"}`} />
        <div className="flex flex-col w-full h-30 md:h-auto"> 
            <strong className="text-h4b leading-4 pb-1">{title}</strong> 
            <p>{description}</p>
        </div>
       
    </div>
  );
}
