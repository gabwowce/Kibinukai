import ProductsList from "./productsList";
import { getMenuItems } from "@/services/wpAPI";

export default async function ProductsListWrapper() {
  const items = await getMenuItems();

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
