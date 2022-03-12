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
): any => {
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

export const isEqual = (
  value: any,
  other: any,
  excludeProperties: Array<string> = []
) => {
  if (!value && !other) {
    return true;
  }
  const eqSting = JSON.stringify(value) === JSON.stringify(other);
  if (eqSting) {
    return true;
  }
  const type = Object.prototype.toString.call(value);
  if (type !== Object.prototype.toString.call(other)) {
    return false;
  }
  if (['[object Array]', '[object Object]'].indexOf(type) < 0) {
    return false;
  }
  const valueLen =
    type === '[object Array]' ? value.length : Object.keys(value).length;
  const otherLen =
    type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) {
    return false;
  }
  const compare = (item1: any, item2: any) => {
    const itemType = Object.prototype.toString.call(item1);
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2, excludeProperties)) {
        return false;
      }
    } else {
      if (itemType !== Object.prototype.toString.call(item2)) {
        return false;
      }
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) {
          return false;
        }
      } else {
        if (item1 !== item2) {
          return false;
        }
      }
    }
    return false;
  };
  // Compare properties
  if (type === '[object Array]') {
    for (let i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) {
        return false;
      }
    }
  } else {
    for (const key in value) {
      if (excludeProperties.indexOf(key) === -1) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          if (compare(value[key], other[key]) === false) {
            return false;
          }
        }
      }
    }
  }
  // If nothing failed, return true
  return true;
};
