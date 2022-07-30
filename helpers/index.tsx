import { useEffect, useRef } from 'react';
import qs from 'qs';

// default stringify options
export const defaultStringifyOpts = (options: any) => {
  const defaultOpts = {
    encode: false,
    indices: false,
    arrayFormat: 'comma',
    sort: 'alphabeticalSort',
  };

  return { ...defaultOpts, ...options };
};

// Stringify query object into string
export const queryStringify = (queryParams: any, options = {}) => {
  const opts = defaultStringifyOpts(options);
  return qs.stringify(queryParams, opts);
};

export const removeEmptyAttributes = (objParams: any) => {
  const dataParams = { ...objParams };
  const entries = Object.entries(dataParams);
  for (const [key, value] of entries) {
    if (!value) delete dataParams[key];
    if (Array.isArray(dataParams[key]) && !value.length) {
      delete dataParams[key];
    }
  }
  return dataParams;
};

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
