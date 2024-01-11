import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isBlank} from '../utils/dateHelper/lodash-mini';
import {KRISHI_BACKEND_IP} from '../utils/constants/constants';
import apiUtils from './apiUtils';

const JAMS_HOST = KRISHI_BACKEND_IP;

const generateAPIResource = (resourceType, accNo, resourceSuffix) => {
  return `jio:${resourceType}:${accNo}:${resourceSuffix}:`;
};

const axiosRequest = async ({
  apiName,
  accNo = '',
  resourceType = 'jams',
  additionalParams = null,
  additionalHeaders = null,
  additionalData = null,
  additionalPath = '',
}) => {
  const token = await AsyncStorage.getItem('krishiAuthToken');
  let accountNumber = accNo;

  if (accNo == '') {
    accountNumber = await AsyncStorage.getItem('accountNumber');
  }
  let response = {};

  const {
    baseUrl,
    version,
    endpoint,
    requestType,
    params,
    data,
    customResourceSuffix = '',
  } = apiUtils[apiName];

  const completeAPIEndpoint = baseUrl + '/api/' + version + endpoint;
  // console.log(completeAPIEndpoint);

  const resourceSuffix = isBlank(customResourceSuffix)
    ? endpoint.split('/')[1]
    : customResourceSuffix;

  const JAMS_HEADERS = {
    'content-type': 'application/json',
    'Override-Language': 'en',
    'JCMS-API-TOKEN': token,
    ...additionalHeaders,
  };

  const KMS_HEADERS = {
    Authorization: `JAMS ${token}`,
    ...additionalHeaders,
  };

  const result = await axios({
    method: requestType,
    url: completeAPIEndpoint + additionalPath,
    headers: baseUrl === JAMS_HOST ? JAMS_HEADERS : KMS_HEADERS,
    params: {
      ...((requestType == 'GET' || requestType == 'DELETE') && {
        resource: generateAPIResource(
          resourceType,
          accountNumber,
          resourceSuffix,
        ),
      }),
      ...params,
      ...additionalParams,
    },
    data: {
      resource: generateAPIResource(
        resourceType,
        accountNumber,
        resourceSuffix,
      ),
      ...data,
      ...additionalData,
    },
  });

  if (result?.data?.response) {
    response.data =
      result?.data?.response.payload ||
      result?.data?.response.data ||
      result?.data?.response;
  } else if (result?.data?.payload) {
    response.data = result?.data?.payload?.data || result?.data?.payload;
  } else {
    response.data = result;
  }

  response.meta = result?.data?.meta || result?.data?.response?.payload?.meta;

  return apiUtils[apiName].pagination
    ? {
        ...response,
        nextPageNo: response?.meta?.next
          ? response?.meta?.next?.split('page=')[1]
          : null,
      }
    : response;
};

export default axiosRequest;
