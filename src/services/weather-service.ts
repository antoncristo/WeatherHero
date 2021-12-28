import axios from "axios";
import {
  API_KEY,
  CURRENT_WEATHER_REQUEST_URL,
  FIVE_DAY_FORECAST_REQUEST_URL,
} from "src/constants";

export const fetchCurrentWeatherByLocationKey = async (locationKey: string) => {
  return axios
    .get(CURRENT_WEATHER_REQUEST_URL + locationKey, {
      params: {
        apikey: API_KEY,
        detailes: false,
      },
    })
    .then((currentWeatherResponse) => {
      return currentWeatherResponse.data[0];
    });
};

export const fetchFiveDayForecastByLocationKey = async (
  locationKey: string
) => {
  return axios
    .get(FIVE_DAY_FORECAST_REQUEST_URL + locationKey, {
      params: {
        apikey: API_KEY,
        detailes: false,
        metric: true,
      },
    })
    .then((forecastResponse) => {
      return {
        headline: forecastResponse.data.Headline.Text,
        forecast: forecastResponse.data.DailyForecasts,
      };
    });
};
