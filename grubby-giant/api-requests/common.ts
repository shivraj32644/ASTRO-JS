//
import Axios from 'axios';
import qs from 'qs';

export const CMS_API_BASE = 'https://dev-cms.corpcare.co.in/api';

export const cmsApiInstance = Axios.create({
    baseURL: CMS_API_BASE,
    paramsSerializer(params) {
      return qs.stringify(params, { encodeValuesOnly: true });
    },
  });