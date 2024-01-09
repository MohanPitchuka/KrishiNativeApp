import {KRISHI_BACKEND_IP} from '../utils/constants/constants';

// const JAMS_HOST = KRISHI_BACKEND_IP
const JAMS_HOST = KRISHI_BACKEND_IP;
const KMS_HOST = "https://kms.sit.cats.jvts.net";

const apiUtils = {
  getPlot: {
    baseUrl: JAMS_HOST,
    version: 'v3',
    endpoint: '/plot/get-plot/',
    requestType: 'GET',
    params: {
      action: 'get_plot',
    },
  },

  getPlotWeatherForecast: {
    baseUrl: JAMS_HOST,
    version: 'v1',
    endpoint: '/wdc/get-plot-weather-data/',
    requestType: 'GET',
    customResourceSuffix: 'plot',
    params: {
      action: 'get_plot_weather_data',
    },
  },

  getCropStagesData: {
    baseUrl: KMS_HOST,
    version: 'v1',
    endpoint: '/business/get-crop-stages/',
    requestType: 'GET',
    // customResourceSuffix: "plot",
    params: {
      language_code: 'en',
    },
  },
};

export default apiUtils;
