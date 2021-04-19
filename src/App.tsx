import { useEffect, useState } from "react";
import { DateRangeForecast } from "./components/DateRangeForecast/DateRangeForecast";
import { DailyForecast, getForecast } from "./services/getForecast";
import { Spinner } from "./components/Spinner/Spinner";
import { LongLatInput } from "./components/LongLatInput/LongLatInput";
import "./App.css";

function App() {
  const [longitude, setLongitude] = useState("-74");
  const [latitude, setLatitude] = useState("40");
  const [error, setError] = useState<string>();
  const [forecast, setForecast] = useState<DailyForecast[]>();

  useEffect(() => {
    setError(undefined);
    setTimeout(() => {
      getForecast(longitude, latitude)
        .then((forecast) => {
          setForecast(forecast);
        })
        .catch((error: Error) => {
          setError(error.message);
        });
    }, 1000);
  }, [longitude, latitude]);

  return (
    <div className="app">
      <h1>5-day weather forecast</h1>

      <LongLatInput
        longitude={longitude}
        latitude={latitude}
        onLongitudeChange={setLongitude}
        onLatitudeChange={setLatitude}
      />

      {error && error}

      {forecast ? <DateRangeForecast forecast={forecast} /> : <Spinner />}
    </div>
  );
}

export { App };
