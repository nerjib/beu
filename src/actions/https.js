import axios from 'axios';
import swal from 'sweetalert';
//  import { NotificationManager } from 'react-notifications';
import { decodeToken } from 'react-jwt';
//  const baseUrl = process.env.REACT_APP_WAYAPAY_BASE_URL;
// const baseUrl = 'https://services.wayapay.ng';
// const gramBaseUrl = 'https://services.wayagram.ng';
// const bankBaseUrl = 'https://services.wayabank.ng';
export const baseUrl = 'https://nmszazzau.herokuapp.com/api/v1/beauty'
const CLIENT_ID = '';
//  const CLIENT_TYPE = localStorage.getItem('CLIENT_TYPE');
// if (process.env.REACT_APP_NODE_ENV === 'development') {
//   baseUrl = 'http://127.0.0.1:8080';
// }


export const getGeoInfo = async () => {
  const response = await axios.get('https://ipapi.co/json/');
  return response.data;
};

export const httpPost = async (
  url,
  postBody,
  otherUrl,
  isNotAuth,
  pin,
  removeSSOID
) => {
  if (!navigator.onLine) {
    return;
  }
  const option1 = {
    headers: {
      Authorization: `${localStorage.token}`,
      'content-type': 'application/json',
      'client-type': localStorage.getItem('TYPE') ?? 'PERSONAL',
      'client-id': CLIENT_ID,
      PIN: pin ?? null,
    },
  };
  const option = {
    headers: {
      Authorization: `${localStorage.token}`,
      'content-type': 'application/json',
      'client-type': localStorage.getItem('TYPE') ?? 'PERSONAL',
      'client-id': CLIENT_ID,
    },
  };
  const optionIsnotAuth = {
    headers: {
      'content-type': 'application/json',
      'client-type': localStorage.getItem('TYPE') ?? 'PERSONAL',
      'client-id': CLIENT_ID,
    },
  };
  try {
    const userId = localStorage.getItem('userId');
    const checkQuery = url.indexOf('?');
    const isAuthService = url.indexOf('auth-service');
    let customUrl = '';
    if (isNotAuth || isAuthService >= 0) customUrl = `${url}`;
    else if (checkQuery >= 0) customUrl = `${url}&sso_id=${userId}`;
    else if (removeSSOID) customUrl = `${url}`;
    else customUrl = `${url}?&sso_id=${userId}`;
    const res = await axios.post(
      `${otherUrl || baseUrl}${customUrl}`,
      postBody,
      isNotAuth ? optionIsnotAuth : pin ? option1 : option
    );
    return res.data;
  } catch (error) {
    
    if (error?.response?.data.error === 'Internal Server Error') {
      return {
        status: false,
        message: error.response.data.error,
      };
    }
    if (error?.response?.data.message === 'Validation Errors') {
      Object.values(error.response.data.data).map((item) =>
        //  NotificationManager.error(item, 'Oops!', 5000)
        false
      );
      return {
        status: false,
        message: error.response?.data?.message ?? error.response?.data.data[0],
      };
    }
    return error.response?.data;
  }
};

export const httpPostUnreloaded = async (
  url,
  postBody,
  otherUrl,
  isNotAuth
) => {
  if (!navigator.onLine) {
    return;
  }
  try {
    const userId = localStorage.getItem('userId');
    const checkQuery = url.indexOf('?');
    const isAuthService = url.indexOf('auth-service');
    let customUrl = '';
    if (isNotAuth || isAuthService >= 0) customUrl = `${url}`;
    else if (checkQuery >= 0) customUrl = `${url}&sso_id=${userId}`;
    else customUrl = `${url}?sso_id=${userId}`;
    const res = await axios.post(
      `${otherUrl || baseUrl}${customUrl}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'Content-Type': 'application/x-www-form-urlencoded',
              'CLIENT-TYPE': localStorage.getItem('TYPE') ?? 'PERSONAL',
              'CLIENT-ID': CLIENT_ID,
            },
          }
        : {}
    );
    return res.data;
  } catch (error) {
    
    return error.response?.data;
  }
};

export const httpPostFormData = async (
  url,
  postBody,
  otherUrl,
  isNotAuth,
  removeSSOID
) => {
  if (!navigator.onLine) {
    return;
  }
  try {
    const userId = localStorage.getItem('userId');
    const checkQuery = url.indexOf('?');
    const isAuthService = url.indexOf('auth-service');
    let customUrl = '';
    if (isNotAuth || isAuthService >= 0) customUrl = `${url}`;
    else if (checkQuery >= 0) customUrl = `${url}&sso_id=${userId}`;
    else if (removeSSOID) customUrl = `${url}`;
    else customUrl = `${url}?sso_id=${userId}`;
    const res = await axios.post(
      `${otherUrl || baseUrl}${customUrl}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'Content-Type': 'multipart/form-data',
              'CLIENT-TYPE': localStorage.getItem('TYPE') ?? 'PERSONAL',
              'CLIENT-ID': CLIENT_ID,
            },
          }
        : {}
    );
    return res.data;
  } catch (error) {
    
    return error.response?.data;
  }
};

export const httpGet = async (url, isNotAuth) => {
  //  const history = useHistory();
  if (!navigator.onLine) {
    return;
  }
  if (!isNotAuth && !localStorage.token) {
    return false;
  }
  if (localStorage.token) {
    const decodedToken = decodeToken(localStorage.token);
    const expDate = new Date(decodedToken?.exp * 1000);
    const newDate = new Date();
    if (newDate > expDate) {
      localStorage.clear();
      // history.push('/');
    }
  }
  try {
    //  const userId = localStorage.getItem('userId');
    // const checkQuery = url.indexOf('?');
    const isAuthService = url.indexOf('auth-service');
    let customUrl = '';
    if (isNotAuth || isAuthService >= 0) customUrl = `${url}`;
    // else if (checkQuery >= 0) customUrl = `${url}&sso_id=${userId}`;
    else customUrl = `${url}`;
    const res = await axios.get(
      customUrl,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'content-type': 'application/json',
              'CLIENT-TYPE': localStorage.getItem('TYPE') ?? 'PERSONAL',
              'CLIENT-ID': CLIENT_ID,
            },
          }
        : {
            headers: {
              'content-type': 'application/json',
              'CLIENT-TYPE': localStorage.getItem('TYPE') ?? 'PERSONAL',
              'CLIENT-ID': CLIENT_ID,
            },
          }
    );
    return res.data;
  } catch (error) {
    
    if (error?.response?.data?.message === 'Validation Errors') {
      Object.values(error?.response?.data?.data).map((item) =>
        swal('Oops!', item, 'error')
      );
      return {
        status: false,
        message: error?.response?.data.data[0],
      };
    }
    return error?.response?.data;
  }
};

export const httpPut = async (
  url,
  postBody,
  otherUrl,
  isNotAuth,
  removeSSOID
) => {
  if (!navigator.onLine) {
    return;
  }
  try {
    const userId = localStorage.getItem('userId');
    const checkQuery = url.indexOf('?');
    const isAuthService = url.indexOf('auth-service');
    let customUrl = '';
    if (isNotAuth || isAuthService >= 0) customUrl = `${url}`;
    else if (checkQuery >= 0) customUrl = `${url}&sso_id=${userId}`;
    else if (removeSSOID) customUrl = `${url}`;
    else customUrl = `${url}?sso_id=${userId}`;
    const res = await axios.put(
      `${otherUrl || baseUrl}${customUrl}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'CLIENT-TYPE': localStorage.getItem('TYPE') ?? 'PERSONAL',
              'CLIENT-ID': CLIENT_ID,
            },
          }
        : {}
    );
    return res.data;
  } catch (error) {
    
    if (error?.response?.data?.message === 'Validation Errors') {
      return {
        status: false,
        message: error?.response?.data.data[0],
      };
    }
    return error?.response?.data;
  }
};

export const httpPatch = async (
  url,
  postBody,
  otherUrl,
  isNotAuth,
  removeSSOID
) => {
  if (!navigator.onLine) {
    return;
  }
  try {
    const userId = localStorage.getItem('userId');
    const checkQuery = url.indexOf('?');
    const isAuthService = url.indexOf('auth-service');
    let customUrl = '';
    if (isNotAuth || isAuthService >= 0) customUrl = `${url}`;
    else if (checkQuery >= 0) customUrl = `${url}&sso_id=${userId}`;
    else if (removeSSOID) customUrl = `${url}`;
    else customUrl = `${url}?sso_id=${userId}`;
    const res = await axios.patch(
      `${otherUrl || baseUrl}${customUrl}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'CLIENT-TYPE': localStorage.getItem('TYPE') ?? 'PERSONAL',
              'CLIENT-ID': CLIENT_ID,
            },
          }
        : {}
    );
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const httpDelete = async (
  url,
  data,
  otherUrl,
  passSso = true,
  isNotAuth
) => {
  if (!navigator.onLine) {
    return;
  }
  try {
    const userId = localStorage.getItem('userId');
    const checkQuery = url.indexOf('?');
    const isAuthService = url.indexOf('auth-service');
    let customUrl = '';
    const sso = passSso ? `sso_id=${userId}` : '';
    if (isNotAuth || isAuthService >= 0) customUrl = `${url}`;
    else if (checkQuery >= 0) customUrl = `${url}&${sso}`;
    else customUrl = `${url}?${sso}`;
    const res = await axios.delete(
      `${otherUrl || baseUrl}${customUrl}`,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'CLIENT-TYPE': localStorage.getItem('TYPE') ?? 'PERSONAL',
              'CLIENT-ID': CLIENT_ID,
            },
            data,
          }
        : {}
    );
    return res.data;
  } catch (error) {
    
    return error.response?.data;
  }
};

//  const resources = {};

export const httpSearch = async (url, isNotAuth) => {
  let cancel;
  if (cancel) {
    // Cancel the previous request before making a new request
    cancel.cancel();
  }
  // Create a new CancelToken
  cancel = axios.CancelToken.source();
  // const cnfig = {
  //   headers: {
  //     Authorization: `${localStorage.token}`,
  //   },
  //   cancelToken: cancel.token,
  // };
  // try {
  //   if (resources[query]) {
  //     // Return result if it exists
  //     return resources[query];
  //   }
  //   const res = await axios(query, cnfig);

  //   const result = res.data;
  //   // Store response
  //   resources[query] = result;

  //   return result;
  // } catch (error) {
  //   if (axios.isCancel(error)) {
  //     // Handle if request was cancelled
  //     console.log('Request canceled', error.message);
  //   } else {
  //     // Handle usual errors
  //     console.log('Something went wrong: ', error.message);
  //   }
  // }
  // return {};

  try {
    // const userId = localStorage.getItem('userId');
    // const checkQuery = url.indexOf('?');
    const res = await axios.get(
      url,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              'CLIENT-TYPE': localStorage.getItem('TYPE') ?? 'PERSONAL',
              'CLIENT-ID': CLIENT_ID,
            },
            cancelToken: cancel.token,
          }
        : {}
    );
    return res.data;
  } catch (error) {
    
    if (axios.isCancel(error)) {
      // Handle if request was cancelled
      console.log('Request canceled', error.message);
    } else {
      // Handle usual errors
      console.log('Something went wrong: ', error.message);
    }
    if (error?.response?.data?.message === 'Validation Errors') {
      Object.values(error?.response?.data?.data).map((item) =>
        swal('Oops!', item, 'error')
      );
      return {
        status: false,
        message: error?.response?.data.data[0],
      };
    }
    return error?.response?.data;
  }
};
