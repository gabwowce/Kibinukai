"use client";

import { useEffect, useState } from "react";
import ProductsList from "./productsList";
import { getMenuItems } from "@/services/wpAPI";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Loading from "@/app/loading";

export default function ProductsListWrapper() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getMenuItems();
        setItems(data);
      } catch (err) {
        console.error(err);
        setError("Nepavyko gauti produktų. Patikrinkite serverį.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const priceMap = {};

  items.forEach(item => {
    const category = item.kategorija;
    const price = parseFloat(item.kaina);
    const unit = item.matavimo_vienetas;

    if (!priceMap[category] || price < priceMap[category].price) {
      priceMap[category] = { price, unit };
    }
  });

  return <ProductsList priceMap={priceMap} />;
}
