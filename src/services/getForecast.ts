import { api } from "./api";
import { DailyStatus } from "../types/DailyStatus";
import { parseDailyStatus } from "./parsers/parseDailyStatus";

interface ApiResponse {
  daily: {
    dt: number;
    temp: {
      day: number;
      eve: number;
      max: number;
      min: number;
      morn: number;
      night: number;
    };
    weather: {
      id: number;
    }[];
  }[];
}

interface DailyForecast {
  date: Date;
  status: DailyStatus;
  lowTemperature: number;
  highTemperature: number;
}

function parseResponse(data: ApiResponse) {
  const forecast: DailyForecast[] = data.daily
    .slice(0, 5)
    .map(({ dt, temp, weather }) => {
      const temperatures = Object.values(temp).sort();
      return {
        date: new Date(dt * 1000),
        status: parseDailyStatus(weather[0].id),
        lowTemperature: temperatures[0],
        highTemperature: temperatures[temperatures.length - 1],
      };
    });
  return forecast;
}

async function getForecast(longitude: string, latitude: string) {
  try {
    const response = await api.get<ApiResponse>("/onecall", {
      params: {
        lat: latitude,
        lon: longitude,
        exclude: "current,minutely,hourly,alerts",
      },
    });
    const forecast = parseResponse(response.data);
    return forecast;
  } catch (error) {
    const { message } = error.response.data;
    throw new Error(message);
  }
}

export { getForecast, DailyStatus };
export type { DailyForecast };
