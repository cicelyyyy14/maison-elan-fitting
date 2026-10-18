import { useCallback, useEffect, useRef, useState } from 'react';

export function usePrivacySession({ sensitive, onExpire }) {
  const [hidden, setHidden] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const activity = useRef(Date.now());
  const created = useRef(Date.now());

  const touch = useCallback(() => {
    activity.current = Date.now();
    setHidden(false);
    setSeconds(60);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      if (now - created.current >= 600000) {
        onExpire();
        created.current = now;
        return;
      }
      if (sensitive && !hidden) {
        const remaining = Math.max(0, 60 - Math.floor((now - activity.current) / 1000));
        setSeconds(remaining);
        if (remaining === 0) setHidden(true);
      }
    };
    const events = ['pointerdown', 'keydown'];
    events.forEach((name) => window.addEventListener(name, touch));
    const timer = window.setInterval(update, 1000);
    return () => {
      events.forEach((name) => window.removeEventListener(name, touch));
      window.clearInterval(timer);
    };
  }, [hidden, onExpire, sensitive, touch]);

  const resetClock = useCallback(() => {
    created.current = Date.now();
    touch();
  }, [touch]);

  return { hidden, seconds, reveal: touch, resetClock };
}
