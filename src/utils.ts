import { useCallback, useState, useRef } from 'react';

export const useForceUpdate = () => {
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);
  return { forceUpdate };
};
type GetCountRender = () => number;
type Counter = () => number;

export const useCountRender: () => {
  getCountRender: GetCountRender;
  counter: Counter;
} = () => {
  return useCallback((): {
    getCountRender: GetCountRender;
    counter: Counter;
  } => {
    const count = useRef(0);
    const counter: Counter = () => {
      return count.current++;
    };
    const getCountRender: GetCountRender = () => {
      return count.current;
    };
    return { getCountRender, counter };
  }, [])();
};

export const cloneDeep = (
  obj: Record<string, any> | string | null,
  infinityLinks: Array<string> = []
): Record<string, any> | string | null | undefined => {
  let copy;
  if (null == obj || 'object' !== typeof obj || typeof obj === 'undefined') {
    return obj;
  }
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = cloneDeep(obj[i], infinityLinks);
    }
    return copy;
  }
  if (obj instanceof Object) {
    copy = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (infinityLinks.indexOf(key) > -1) {
          copy[key] = obj[key];
        } else {
          copy[key] = cloneDeep(obj[key], infinityLinks);
        }
      }
    }
    return copy;
  }
  return obj;
};

export const isObject = (object: null | Record<string, any> | string) => {
  return object != null && typeof object === 'object';
};

export const isEqual = (
  object1: Record<string, any> | string | number | null | boolean,
  object2: Record<string, any> | string | number | null | boolean
) => {
  if (
    object1 &&
    object2 &&
    typeof object1 !== 'string' &&
    typeof object2 !== 'string'
  ) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        (areObjects && !isEqual(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }
  }
  return object1 === object2;
};
