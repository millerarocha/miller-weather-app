const WEATHER_MOCK = {
  description: "clear sky",
  icon: "01d",
  temperature: 25,
  city: "New York",
};

const WeatherCard: React.FC = () => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl mb-2">{WEATHER_MOCK.city}</h2>
      <p className="text-lg">{WEATHER_MOCK.description}</p>
      <p className="text-4xl">{WEATHER_MOCK.temperature}°C</p>
      <img
        src={`http://openweathermap.org/img/wn/${WEATHER_MOCK.icon}@2x.png`}
        alt={WEATHER_MOCK.description}
      />
    </div>
  );
};
export default WeatherCard;
