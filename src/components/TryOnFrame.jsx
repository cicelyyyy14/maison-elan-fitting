import { useState } from 'react';

export default function TryOnFrame({ result, label, crop, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (!result || failed) {
    return <div className={`tryon-frame image-error ${className}`} role="img" aria-label="试穿结果加载失败"><span>试穿结果暂不可用</span></div>;
  }
  const cropStyle = crop ? {
    backgroundPosition: `${crop.x || result.position} ${crop.y}`,
    backgroundSize: `${400 * crop.scale}% auto`,
  } : { backgroundPosition: `${result.position} center` };
  return (
    <div className={`tryon-frame ${className}`} data-look-id={result.lookId} data-crop={crop?.key} style={{ backgroundImage: `url(${result.image})`, ...cropStyle }}>
      <img className="tryon-sheet" src={result.image} alt="" aria-hidden="true" onError={() => setFailed(true)} />
      <span className="sr-only" role="img" aria-label={label} />
    </div>
  );
}
