"use client";

import HeroSecondary from "@/components/heroSecondary";
import OrderInfo from "@/components/orders/orderInfo";
import DeliveryInfo from "@/components/orders/deliveryInfo";


export default function OrdersLayout({ children }) {
  return (
    <main className="container min-h-screen">
      {/* Hero sekcija */}
      <HeroSecondary 
        title="Jūsų užsakymas" 
        breadcrumb={[
          { label: "Pagrindinis", href: "/" },
          { label: "Jūsų užsakymas", href: "/orders" }
        ]}
      />

      {/* Dinaminė centrinė dalis */}
      {children}

      {/* Visada rodoma informacija */}
      <OrderInfo />
      <DeliveryInfo />
    </main>
  );
}
