import { DailyForecast } from "../DailyForecast/DailyForecast";
import type { DailyForecast as DailyForecastType } from "../../services/getForecast";
import "./DateRangeForecast.css";

interface ForecastProps {
  forecast: DailyForecastType[];
}

function DateRangeForecast(props: ForecastProps) {
  const { forecast } = props;

  return (
    <div className="date-range-forecast">
      {forecast.map((dailyForecast) => (
        <DailyForecast
          key={dailyForecast.date.getTime()}
          forecast={dailyForecast}
        />
      ))}
    </div>
  );
}

export { DateRangeForecast };
