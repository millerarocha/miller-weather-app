import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";
import WeatherForm from "./components/WeatherForm";


const App: React.FC = () => {
  const fetchWeather = (city: string) => {
    console.log(`Fetching weather for ${city}`);
  };

  return (
    <div className="container mx-auto flex flex-col h-full p-4 border-2">
      <h1 className="text-4xl mb-4">Weather App</h1>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherCard />
      <WeatherForecast />
    </div>
  );
};

export default App;
