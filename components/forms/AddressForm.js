import UniversalInput from './UniversalInput';
import UniversalTextarea from './UniversalTextarea';

export default function AddressForm({ city, setCity, street, setStreet, houseNumber, setHouseNumber, apartment, setApartment, addressNotes, setAddressNotes, errors }) {
  return (
    <div className="space-y-4 pb-6 border-b border-orange-200 bg-orange-50 border-l-4 border-orange-300 p-4 rounded-md">
      <p className="font-lg text-brown">Pristatymo adresas:</p>

      <UniversalInput
        label="Miestas"
        value={city}
        onChange={(value) => setCity(value)}
        placeholder="Vilnius"
        error={errors.city}
      />

      <UniversalInput
        label="Gatvė"
        value={street}
        onChange={(value) => setStreet(value)}
        placeholder="Ūmedžių g."
        error={errors.street}
      />

      <div className="flex space-x-4">
        <UniversalInput
          label="Namo numeris"
          labelClassName="h-10 md:h-6"
          value={houseNumber}
          onChange={(value) => setHouseNumber(value)}
          placeholder="12"
          error={errors.houseNumber}
        />

        <UniversalInput
          label="Buto numeris (jei yra)"
          labelClassName="h-10 md:h-6"
          value={apartment}
          onChange={(value) => setApartment(value)}
          placeholder="45"
        />
      </div>

      <UniversalTextarea
        label="Papildoma informacija (pvz., įėjimas, kodas, pastabos kurjeriui)"
        value={addressNotes}
        onChange={(value) => setAddressNotes(value)}
        placeholder="Pvz.: Ofisas 3 aukšte, įėjimas iš kiemo pusės"
      />
    </div>
  );
}
