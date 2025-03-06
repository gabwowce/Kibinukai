import HeroSecondary from "@/components/heroSecondary";
import MenuItems from "@/components/menu/Menu";
import BubbleBackground from "../../components/decoration/bubbleBackground";
import OrderInfo from "@/components/orders/orderInfo"; // Importuojame naują OrderInfo

export default function Menu() {

  return (
    <main>
      <HeroSecondary
        title="Meniu"
        breadcrumb={[
          { label: "Pagrindinis", href: "/" },
          { label: "Meniu", href: "/menu" },
        ]}
      />

      <div className="w-full overflow-hidden flex flex-col relative">
        <BubbleBackground center />
        <MenuItems />
      </div>

      {/* Užsakymų informacija su dinaminiais duomenimis */}
      <OrderInfo className="container" />
    </main>
  );
}
