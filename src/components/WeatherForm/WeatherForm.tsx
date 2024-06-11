import { useState } from "react";

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border p-2 rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default WeatherForm;
