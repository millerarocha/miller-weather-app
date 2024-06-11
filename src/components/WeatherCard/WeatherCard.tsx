const WEATHER_MOCK = {
  description: "clear sky",
  icon: "01d",
  temperature: 25,
  city: "New York",
};

const WeatherCard: React.FC = () => {
  return (
    <div className="p-4 border rounded-xl shadow flex flex-col items-center justify-evenly bg-white/30 backdrop-blur-lg md:w-80">
      <h2 className="text-4xl text-blue-950">{WEATHER_MOCK.city}</h2>
      <p className="text-lg text-blue-950/70">{WEATHER_MOCK.description}</p>
      <p className="text-8xl text-white/80">{WEATHER_MOCK.temperature}°C</p>
      <img
        src={`http://openweathermap.org/img/wn/${WEATHER_MOCK.icon}@2x.png`}
        alt={WEATHER_MOCK.description}
      />
    </div>
  );
};
export default WeatherCard;
