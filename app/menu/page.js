"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";

export default function MenuRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/menu/kibinai"); // Pakeisk į norimą pradinę kategoriją
  }, [router]);

  return <Loading/>
}
