import { DailyStatus } from "../../types/DailyStatus";

function parseDailyStatus(weatherId: number) {
  switch (weatherId) {
    case 801:
    case 802:
    case 803:
    case 804:
      return DailyStatus.Clouds;
    case 800:
      return DailyStatus.Clear;
    case 701:
      return DailyStatus.Mist;
    case 711:
      return DailyStatus.Smoke;
    case 721:
      return DailyStatus.Haze;
    case 741:
      return DailyStatus.Fog;
    case 751:
      return DailyStatus.Sand;
    case 762:
      return DailyStatus.Ash;
    case 771:
      return DailyStatus.Squall;
    case 781:
      return DailyStatus.Tornado;
    case 731:
    case 761:
      return DailyStatus.Dust;
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return DailyStatus.Snow;
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
      return DailyStatus.Rain;
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return DailyStatus.Thunderstorm;
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      return DailyStatus.Drizzle;
    default:
      throw new Error(`Invalid weatherId ${weatherId}`);
  }
}

export { parseDailyStatus };
