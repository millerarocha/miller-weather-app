const WeatherForecast: React.FC = () => {

    const FORECAST_MOCK = [
      {
        date: "2023-06-10 12:00:00",
        temperature: 26,
        description: "sunny",
        icon: "01d",
      },
      {
        date: "2023-06-11 12:00:00",
        temperature: 27,
        description: "partly cloudy",
        icon: "02d",
      },
      {
        date: "2023-06-12 12:00:00",
        temperature: 28,
        description: "cloudy",
        icon: "03d",
      },
      {
        date: "2023-06-13 12:00:00",
        temperature: 29,
        description: "rain",
        icon: "09d",
      },
      {
        date: "2023-06-14 12:00:00",
        temperature: 30,
        description: "thunderstorm",
        icon: "11d",
      },
    ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {FORECAST_MOCK.map((day, index) => (
        <div key={index} className="p-4 border rounded shadow">
          <p>{day.date}</p>
          <p>{day.description}</p>
          <p>{day.temperature}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt={day.description}
          />
        </div>
      ))}
    </div>
  );
}
export default WeatherForecast