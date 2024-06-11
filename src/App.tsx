import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";
import WeatherForm from "./components/WeatherForm";

const App: React.FC = () => {
  const fetchWeather = (city: string) => {
    console.log(`Fetching weather for ${city}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="container mx-auto flex flex-col justify-evenly min-h-screen p-4">
        <header className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <div className="flex flex-col items-center mb-4 md:mb-0 md:items-start">
            <h1 className="text-3xl md:text-5xl md:mb-1 text-white">
              Miller's Weather App
            </h1>
            <p className=" text-sm text-white/60 text-center">
              Please type the city and have fun with the app
            </p>
          </div>
          <WeatherForm onSearch={fetchWeather} />
        </header>
        <section id="weather" className="my-5 md:flex md:justify-center md:w-full">
          <WeatherCard />
        </section>
        <WeatherForecast />
      </div>
    </div>
  );
}; 

export default App;
