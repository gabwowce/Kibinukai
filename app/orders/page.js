"use client";
import { useCart } from "@/services/cartContext";
import HeroSecondary from "@/components/heroSecondary";
import Cart from "@/components/orders/cart";
import OrderInfo from "@/components/orders/orderInfo";
import DeliveryInfo from "@/components/orders/deliveryInfo";

export default function Orders() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <main className="container min-h-screen">
      <HeroSecondary 
        title="Jūsų užsakymas" 
        breadcrumb={[
          { label: "Pagrindinis", href: "/" },
          { label: "Jūsų užsakymas", href: "/orders" }
        ]}
      />

      {/* Krepšelio sekcija */}
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />

      {/* Užsakymų informacija */}
      <OrderInfo />

      {/* Pristatymo informacija */}
      <DeliveryInfo />
    </main>
  );
}
