import { useEffect, useRef, useState } from 'react';

export function useGeneration({ active, result, forceFailure, onSuccess, onFailure }) {
  const [progress, setProgress] = useState(0);
  const [assetReady, setAssetReady] = useState(false);
  const locked = useRef(false);

  useEffect(() => {
    if (!active || locked.current) return undefined;
    locked.current = true;
    setProgress(0);
    setAssetReady(false);
    let ready = false;
    let failed = !result;
    const image = new Image();
    image.onload = () => { ready = true; setAssetReady(true); };
    image.onerror = () => { failed = true; };
    image.src = result?.image || '';
    const timer = window.setInterval(() => {
      if (failed) {
        window.clearInterval(timer);
        locked.current = false;
        onFailure('asset');
        return;
      }
      setProgress((value) => {
        const next = Math.min(ready ? 100 : 94, value + 2);
        if (next === 100) {
          window.clearInterval(timer);
          window.setTimeout(() => {
            locked.current = false;
            if (forceFailure) onFailure('timeout'); else onSuccess();
          }, 260);
        }
        return next;
      });
    }, 120);
    return () => {
      image.onload = null;
      image.onerror = null;
      window.clearInterval(timer);
      locked.current = false;
    };
  }, [active, forceFailure, onFailure, onSuccess, result]);

  return { progress, assetReady };
}
