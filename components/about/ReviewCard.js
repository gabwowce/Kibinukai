import { FaStar } from "react-icons/fa";

export default function ReviewCard(props) {
  const {
    name,
    date,
    text,
    ratingFood,
    ratingService,
    ratingAtmosphere,
    ownerReply,
    extraInfo,
    profileType
  } = props;

  return (
    <article 
      className="bg-white rounded-lg shadow p-5 space-y-3 border-l-4 border-x-outrageous-orange-400"
      aria-label="Atsiliepimas"
    >
      {/* Vartotojo vardas + jo tipas (pvz. Vienas atsiliepimas, Vietos gidas ir pan.) */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h3 className="text-lg leading-5 font-semibold text-gray-800">{name}</h3>
        {profileType && (
          <span className="text-sm text-gray-500 italic mt-1 sm:mt-0">
            {profileType}
          </span>
        )}
      </div>

      {/* Data / "prieš mėnesį" */}
      <p className="text-xs text-gray-400">{date}</p>

      {/* Papildoma info, pvz. "Maistas išsinešti | Pietūs | 1–5 €" */}
      {extraInfo && (
        <p className="text-sm text-gray-600">{extraInfo}</p>
      )}

      {/* Pagrindinis atsiliepimo tekstas */}
      <p className="text-gray-700 text-sm whitespace-pre-line">
        {text}
      </p>

      {/* Reitingai, jei nurodyti */}
      {(ratingFood || ratingService || ratingAtmosphere) && (
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          {typeof ratingFood === "number" && (
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>Maistas: {ratingFood} / 5</span>
            </div>
          )}
          {typeof ratingService === "number" && (
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>Paslauga: {ratingService} / 5</span>
            </div>
          )}
          {typeof ratingAtmosphere === "number" && (
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>Atmosfera: {ratingAtmosphere} / 5</span>
            </div>
          )}
        </div>
      )}

      {/* Savininko atsakymas */}
      {ownerReply && (
        <div className="mt-3 bg-gray-50 p-3 rounded-md border border-gray-200">
          <span className="block text-gray-800 font-semibold mb-1">
            „Kibinukai“ (savininkas)
          </span>
          <p className="text-gray-700 text-sm">{ownerReply}</p>
        </div>
      )}
    </article>
  );
}
