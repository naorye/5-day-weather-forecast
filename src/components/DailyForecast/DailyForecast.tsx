import { useMemo } from "react";
import format from "date-fns/format";
import {
  DailyForecast as DailyForecastType,
  DailyStatus,
} from "../../services/getForecast";
import { ReactComponent as CloudsIcon } from "../../assets/Clouds.svg";
import { ReactComponent as ClearIcon } from "../../assets/Clear.svg";
import { ReactComponent as HazeIcon } from "../../assets/Haze.svg";
import { ReactComponent as MistIcon } from "../../assets/Mist.svg";
import { ReactComponent as SmokeIcon } from "../../assets/Smoke.svg";
import { ReactComponent as DustIcon } from "../../assets/Dust.svg";
import { ReactComponent as DrizzleIcon } from "../../assets/Drizzle.svg";
import { ReactComponent as ThunderstormIcon } from "../../assets/Thunderstorm.svg";
import { ReactComponent as RainIcon } from "../../assets/Rain.svg";
import { ReactComponent as SnowIcon } from "../../assets/Snow.svg";
import { ReactComponent as FogIcon } from "../../assets/Fog.svg";
import { ReactComponent as SandIcon } from "../../assets/Sand.svg";
import { ReactComponent as AshIcon } from "../../assets/Ash.svg";
import { ReactComponent as SquallIcon } from "../../assets/Squall.svg";
import { ReactComponent as TornadoIcon } from "../../assets/Tornado.svg";
import "./DailyForecast.css";

interface DailyForecastProps {
  forecast: DailyForecastType;
}

function getDailyStatusIcon(status: DailyStatus) {
  switch (status) {
    case DailyStatus.Clouds:
      return CloudsIcon;
    case DailyStatus.Clear:
      return ClearIcon;
    case DailyStatus.Mist:
      return MistIcon;
    case DailyStatus.Smoke:
      return SmokeIcon;
    case DailyStatus.Haze:
      return HazeIcon;
    case DailyStatus.Dust:
      return DustIcon;
    case DailyStatus.Fog:
      return FogIcon;
    case DailyStatus.Sand:
      return SandIcon;
    case DailyStatus.Ash:
      return AshIcon;
    case DailyStatus.Squall:
      return SquallIcon;
    case DailyStatus.Tornado:
      return TornadoIcon;
    case DailyStatus.Snow:
      return SnowIcon;
    case DailyStatus.Rain:
      return RainIcon;
    case DailyStatus.Thunderstorm:
      return ThunderstormIcon;
    case DailyStatus.Drizzle:
      return DrizzleIcon;
    default:
      return null;
  }
}

function DailyForecast(props: DailyForecastProps) {
  const { forecast } = props;

  const { date, day, status, Icon } = useMemo(() => {
    const date = format(forecast.date, "dd/MM/yyyy");
    const day = format(forecast.date, "E");
    const status = DailyStatus[forecast.status];
    const Icon = getDailyStatusIcon(forecast.status);
    return { date, day, status, Icon };
  }, [forecast]);

  return (
    <div className="daily-forecast">
      <div className="date">{`${date} - ${day}`}</div>
      <div className="status">{status}</div>
      {Icon && <Icon />}
      <div>{`${forecast.lowTemperature} - ${forecast.highTemperature}`}</div>
    </div>
  );
}

export { DailyForecast };
