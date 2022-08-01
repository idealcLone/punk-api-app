import React, { useEffect, useRef } from "react";

export const useDebounce = (callback: () => void, time: number) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => callback(), time);
  }, [callback, time]);
};
