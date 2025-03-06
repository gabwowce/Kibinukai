"use client";
import React, { useEffect, useState } from "react";
import { getMenuItems } from "../../services/wpAPI";
import MenuItem from "./MenuItem";
import CategoryButton from "../ui/button/categoryButton";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    getMenuItems().then((data) => {
      setMenuItems(data);

      // Ištraukiame unikalias kategorijas
      const uniqueCategories = [...new Set(data.map((item) => item.kategorija))];
      setCategories(uniqueCategories);

      // Pasirinkti pirmąją kategoriją kaip aktyvią
      if (uniqueCategories.length > 0) {
        setActiveCategory(uniqueCategories[0]);
      }
    });
  }, []);

  // Filtruojame produktus pagal aktyvią kategoriją
  const filteredItems = menuItems.filter((item) => item.kategorija === activeCategory);

  // Grupavimas pagal subkategorijas
  const groupedBySubcategory = filteredItems.reduce((acc, item) => {
    if (!acc[item.subkategorija]) {
      acc[item.subkategorija] = [];
    }
    acc[item.subkategorija].push(item);
    return acc;
  }, {});

  return (
    <div className="container p-6 mx-auto">
      {/* Kategorijų pasirinkimo juosta */}
      <div className="flex space-x-4 mb-6 overflow-x-auto justify-center">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isActive={category === activeCategory}
            onClick={setActiveCategory}
          />
        ))}
      </div>

      {/* Rodome tik aktyvios kategorijos subkategorijas */}
      {Object.keys(groupedBySubcategory).map((subcategory) => (
        <div key={subcategory} className="mb-8">
          <h3 className="text-2xl font-semibold border-b-2 border-gray-400 pb-2 mb-4">
            {subcategory}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
