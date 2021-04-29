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
