"use client";
import React from "react";
import MenuItem from "./MenuItem";

const MenuItems = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">Nėra prekių šioje kategorijoje.</p>;
  }

  // Grupavimas pagal subkategorijas
  const groupedBySubcategory = items.reduce((acc, item) => {
    if (!acc[item.subkategorija]) {
      acc[item.subkategorija] = [];
    }
    acc[item.subkategorija].push(item);
    return acc;
  }, {});

  return (
    <div className=" p-6 mx-auto">
      {Object.keys(groupedBySubcategory).map((subcategory) => (
        <div key={subcategory} className="mb-8">
          <h3 className="text-2xl font-semibold pb-2 mb-4">
            {subcategory
              .toLowerCase() // Viską paverčia mažosiomis raidėmis
              .replace(/^(\w)/, (char) => char.toUpperCase())} {/* Pirmą raidę daro didžiąją */}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {groupedBySubcategory[subcategory].map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
