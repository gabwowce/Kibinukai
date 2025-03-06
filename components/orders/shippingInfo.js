import { 
  FaExternalLinkAlt, 
  FaBolt, 
  FaShippingFast, 
  FaMapMarkerAlt, 
  FaTruckPickup 
} from "react-icons/fa"; 


export default function ShippingInfo() {
  return (
    <main>
     <section 
           id="shipping-info" 
           className="bg-gray-50 p-6 mt-8 rounded-lg shadow-sm"
           aria-labelledby="shipping-info-heading"
         >
           {/* Antraštė */}
           <h2 
             id="shipping-info-heading" 
             className="text-xl font-semibold mb-4 text-gray-800"
           >
             Užsakymų ir pristatymo informacija
           </h2>
     
           {/* Trumpa užuomina apie išankstinius užsakymus */}
           <div className="flex items-center gap-3 mb-6">
             <FaShippingFast className="text-blue-600 text-2xl" />
             <p className="text-gray-700">
               Išankstiniai užsakymai vykdomi <strong>7 / 24</strong>.
             </p>
           </div>
     
           {/* Dviejų stulpelių tinklas su pristatymo sąlygomis */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             
             {/* NEMOKAMAS pristatymas užsakant nuo 89 € */}
             <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
               <FaMapMarkerAlt className="text-green-500 text-2xl shrink-0" />
               <div>
                 <h3 className="font-semibold text-gray-800 mb-1">
                   Nemokamas pristatymas Vilniaus mieste
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Užsakant nuo <strong>89 €</strong>.
                 </p>
               </div>
             </div>
     
             {/* Pristatymas užsakant iki 89 € */}
             <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
               <FaTruckPickup className="text-purple-500 text-2xl shrink-0" />
               <div>
                 <h3 className="font-semibold text-gray-800 mb-1">
                   Pristatymas (iki 89 €)
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Kainos prasideda nuo <strong>4,90 €</strong>.
                 </p>
               </div>
             </div>
     
             {/* Pristatymas į paštomatus */}
             <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
               <FaMapMarkerAlt className="text-orange-500 text-2xl shrink-0" />
               <div>
                 <h3 className="font-semibold text-gray-800 mb-1">
                   Į paštomatus (Vilniuje)
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Nuo <strong>5,00 €</strong> (pastabų laukelyje nurodykite 
                   siuntų terminalą).
                 </p>
               </div>
             </div>
     
             {/* Pristatymas Lietuvoje */}
             <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
               <FaTruckPickup className="text-yellow-500 text-2xl shrink-0" />
               <div>
                 <h3 className="font-semibold text-gray-800 mb-1">
                   Pristatymas Lietuvoje
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Į autobusų stoties siuntų skyrių nuo <strong>5,00 €</strong> 
                   (pastabų laukelyje nurodykite miestą).
                 </p>
               </div>
             </div>
     
             {/* Nemokamas atsiėmimas vietoje */}
             <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm md:col-span-2">
               <FaMapMarkerAlt className="text-red-500 text-2xl shrink-0" />
               <div>
                 <h3 className="font-semibold text-gray-800 mb-1">
                   Nemokamas atsiėmimas vietoje
                 </h3>
                 <p className="text-gray-700 text-sm">
                   <strong>Ūmėdžių g. 12A, Vilnius</strong>
                 </p>
               </div>
             </div>
     
             {/* Kitos platformos: negaminsiu.lt ir Bolt */}
             <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm md:col-span-2">
               <FaExternalLinkAlt className="text-blue-600 text-2xl shrink-0" />
               <div>
                 <h3 className="font-semibold text-gray-800 mb-1">
                   Kibinukų produkciją rasite ir kitur
                 </h3>
                 <p className="text-gray-700 text-sm mb-1">
                   <strong>negaminsiu.lt</strong> svetainėje:{" "}
                   <a 
                     href="https://www.negaminsiu.lt/gamintojas/kibinukai"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 underline hover:text-blue-800"
                   >
                     peržiūrėti
                   </a>
                 </p>
                 <p className="text-gray-700 text-sm flex items-center gap-2">
                   <FaBolt className="text-yellow-500" />
                   Taip pat „Bolt“ aplikacijoje (greitam pristatymui)
                 </p>
                 <p className="text-xs text-gray-500 mt-2">
                   Šie užsakymo būdai nėra pagrindiniai, tačiau gali būti patogūs.
                 </p>
               </div>
             </div>
           </div>
     
           {/* Papildoma eilutė apie spindulį (po tinklelio) */}
           <div className="mt-4 text-gray-700">
             <p>
               <strong>Pristatymas Lietuvoje 100–150 km spinduliu.</strong>
             </p>
           </div>
         </section>
    </main>
  );
}
