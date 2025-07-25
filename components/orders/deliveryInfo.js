import {
  FaClock,
  FaMapMarkerAlt,
  FaShippingFast,
  FaExternalLinkAlt,
} from "react-icons/fa";
import InfoBlock from "../orders/InfoBlock";
import SectionHeader from "./SectionHeader";

export default function DeliveryInfo() {
  return (
    <section className="mx-auto p-6 my-8 ">
      <SectionHeader
        title="Užsakymų ir pristatymo informacija"
        icon={FaShippingFast}
        description="Išankstiniai užsakymai vykdomi 7 / 24"
      />

      <div className="space-y-4">
        <InfoBlock
          icon={FaMapMarkerAlt}
          title="Nemokamas pristatymas Vilniaus mieste"
          description="Užsakant nuo 89 €."
        />
        <InfoBlock
          icon={FaMapMarkerAlt}
          title="Pristatymas į paštomatus (Vilniuje)"
          description="5,00 € (pastabų laukelyje nurodykite pageidaujamą siuntų terminalą)."
        />
        <InfoBlock
          icon={FaMapMarkerAlt}
          title="Nemokamas atsiėmimas vietoje"
          description="Ūmėdžių g. 12A, Vilnius"
        />
        <InfoBlock
          icon={FaMapMarkerAlt}
          title="Pristatymas iki 89 €"
          description="Kainos prasideda nuo 4,90 €"
        />
        <InfoBlock
          icon={FaMapMarkerAlt}
          title="Pristatymas Lietuvoje"
          description="Į autobusų stoties siuntų skyrių nuo 5,00 €. (pastabų laukelyje nurodykite miestą)."
        />
      </div>
      <p className="text-black-transparent70 py-6">
        Pristatymas Lietuvoje 100-150 km spinduliu nuo Vilniaus.
      </p>
      <InfoBlock
        icon={FaExternalLinkAlt}
        title="Greitas pristatymas:"
        description={
          <>
            Svetainėje{" "}
            <a
              href="https://www.negaminsiu.lt/gamintojas/kibinukai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9480F] underline font-semibold"
            >
              negaminsiu.lt
            </a>{" "}
            | Aplikacijoje{" "}
            <a
              href="https://food.bolt.eu/lt-LT/9-vilnius/p/57066-kibinukai-(%C5%ABm%C4%97d%C5%BEi%C5%B3-g.)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9480F] underline font-semibold"
            >
              Bolt
            </a>
          </>
        }
      />
    </section>
  );
}
