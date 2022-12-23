/*
 * @Author: jinx
 * @Date: 2021-04-25 15:58:21
 * @LastEditors: jinx
 * @LastEditTime: 2021-05-08 15:49:54
 * @Description: 注释
 */

import axios from 'axios';
import browser from './browser';
import router from '@/router';
import { Toast } from 'vant';
let BASE_URL = import.meta.env.MODE == 'development' ? '' : import.meta.env.VITE_BASE_URL;
// TextDecoder polyfills for lower browser
if (undefined === window.TextEncoder) {
  window.TextEncoder = class _TextEncoder {
    encode(s) {
      return unescape(encodeURIComponent(s))
        .split('')
        .map(function (val) {
          return val.charCodeAt();
        });
    }
  };
  window.TextDecoder = class _TextDecoder {
    decode(code_arr) {
      return decodeURIComponent(escape(String.fromCharCode.apply(null, code_arr)));
    }
  };
}

const fetch = axios.create();

fetch.interceptors.request.use(
  (config) => {
    if (config.url.indexOf('/api/') != -1) {
      let token = browser.valueFromUrl('token') || localStorage.getItem('token') || '';
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
        // config.headers['Authorization'] = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
fetch.interceptors.response.use(
  (response) => {
    // 正常的文件流
    if (!/json/gi.test(response.headers['content-type'])) {
      return response.data;
    }

    // 以文件流方式请求但是返回json，需要解析为JSON对象
    if (response.request.responseType === 'arraybuffer') {
      let enc = new TextDecoder('utf-8');
      let res = JSON.parse(enc.decode(new Uint8Array(response.data)));
      return res;
    }

    return response.data;
  },
  (error) => {
    if (error.response.status == 401) {
      localStorage.removeItem('token');
      router.replace('/login');
      Toast('登录失效，请重新登录');
    }
  }
);

const http = {
  retry(func, retries = 0, delay = 1000) {
    return new Promise((resolve, reject) => {
      func()
        .then(resolve)
        .catch((error) => {
          if (retries <= 1) {
            reject(error);
          } else {
            setTimeout(() => {
              http
                .retry(func, retries - 1, delay)
                .then(resolve)
                .catch(reject);
            }, delay);
          }
        });
    });
  },
  get(url) {
    return fetch.get(url.indexOf('http') != -1 ? url : BASE_URL + url);
  },
  getImage(url, retries = 3) {
    return http.retry(
      () =>
        new Promise((resolve, reject) => {
          let img = new Image();
          img.src = url;
          img.crossOrigin = 'anonymous';
          img.onload = function () {
            resolve(img);
          };
          img.onerror = function () {
            reject(`[${url}] load fail`);
          };
        }),
      retries
    );
  },
  getBueffer(url) {
    return fetch.get(url, {
      responseType: 'arraybuffer',
    });
  },
  getBlob(url) {
    return fetch.get(url, {
      responseType: 'blob',
    });
  },
  post(url, data) {
    return fetch.post(url.indexOf('http') != -1 ? url : BASE_URL + url, data);
  },
  postFile(url, data) {
    const form = new FormData();
    let cb = null;
    if (data.onUploadProgress) {
      cb = data.onUploadProgress;
      delete data.onUploadProgress;
    }
    for (let key in data) {
      form.append(key, data[key]);
    }

    return fetch.post(url.indexOf('http') != -1 ? url : BASE_URL + url, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: cb,
    });
  },
};

export { http, fetch };
