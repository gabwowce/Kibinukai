import { FaClock, FaInfoCircle } from "react-icons/fa";
import InfoBlock from "../orders/InfoBlock";
import SectionHeader from "./SectionHeader";

export default function OrderInfo({className}) {
  return (
    <section className={`mx-auto p-6 my-8 ${className}`}>
        
      <SectionHeader
        brown
        title="Užsakymų informacija"
        icon={FaClock}
        description="Bendras užsakymų priėmimo laikas telefonu: 5:30 – 23:00 val."
        />
     

      <div className="space-y-4">
        <InfoBlock brown
          icon={FaInfoCircle}
          title="Tos pačios (darbo) dienos užsakymai"
          description="Užsakymą pateikite iki 12:00 val. Jūsų užsakymą paruošime nuo 2,5 val., priklausomai nuo užimtumo ir užsakomo kiekio."
        />
        <InfoBlock brown
          icon={FaInfoCircle}
          title="Savaitgalio užsakymai"
          description="Pateikite iki penktadienio 10:00–11:00 val. Pristatymas ir atsiėmimas bus galimas jau šeštadienį nuo 10 val."
        />
        <InfoBlock brown
          icon={FaInfoCircle}
          title="Šimtalapių ir šakočių gamyba"
          description="gamyba trunka 2–4 d. d."
        />
        <InfoBlock brown
          icon={FaInfoCircle}
          title="Užsakymų atsiėmimo laikas"
          description="gali skirtis nuo kavinės darbo valandų – suderiname individualiai."
        />
      </div>
    </section>
  );
}
