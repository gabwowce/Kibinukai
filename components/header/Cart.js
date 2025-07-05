"use client";

import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useCart } from "@/context/cartContext";
import { usePathname } from "next/navigation";
import styles from "./nav.module.scss"; // Jei turi SCSS failą

export default function Cart({ forMobile, onClick, className, size }) {
  const { cart } = useCart();
  const pathname = usePathname();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/orders"
      prefetch={false}
      onClick={onClick}
      className={`${className ? className : "relative flex items-center"}  ${
        forMobile ? "" : pathname === "/orders/" ? styles.active : ""
      }`}
    >
      {/* Maišelio ikona */}
      <HiOutlineShoppingBag className="pb-1" size={size ? size : 30} />

      {/* Krepšelio prekių kiekis */}
      {cartItemCount > 0 && (
        <span className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {cartItemCount}
        </span>
      )}
    </Link>
  );
}
