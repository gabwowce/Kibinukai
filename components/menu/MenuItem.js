import React, { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import ProductModal from "../orders/productModal";

const MenuItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b-2 border-gray-40">
        <div className="w-2/3">
          <h3 className="text-sm md:text-lg font-bold text-gray-900 pr-4">{item.pavadinimas}</h3>
          {/* <p className="text-sm text-gray-600">{item.aprasymas}</p> */}
          <div className="flex items-center space-x-2">
            {item.senaKaina && <span className="text-gray-500 line-through">{item.senaKaina} €</span>}
            <span className="text-red-600 font-bold">{item.kaina} €</span>
          </div>
        </div>
        <div className="relative flex items-center">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.pavadinimas}
              width={100}
              height={100}
              sizze="100px"
              className="rounded-lg object-contain shadow-sm bg-white "
              unoptimized
            />
          ) : (
            <><div className="w-10"></div></>
          )}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            <FaPlus size={14} />
          </button>
        </div>
      </div>

      {isModalOpen && <ProductModal item={item} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default MenuItem;
