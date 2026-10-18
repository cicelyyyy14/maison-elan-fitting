import { Smartphone, UserRound } from 'lucide-react';
import TryOnFrame from './TryOnFrame';

export default function FittingMirror({ avatar, garment, result, onQr, onGarment, onAvatar }) {
  return (
    <section className="result-page animate-in">
      <div className="fitting-gallery" aria-label={`${avatar.name} 的试穿前后对照`}>
        <div className="salon-glow glow-left" aria-hidden="true" />
        <div className="salon-glow glow-right" aria-hidden="true" />
        <figure className="portrait-frame before-frame">
          <span className="frame-corner" aria-hidden="true" />
          <div className="ivory-mat">
            <img className="before-portrait" src={avatar.image} alt={`${avatar.name} 试穿前素色打底形象`} style={{ objectPosition: avatar.beforeCrop.position, transform: `scale(${avatar.beforeCrop.scale})`, transformOrigin: avatar.beforeCrop.origin }} />
          </div>
          <figcaption>试穿前</figcaption>
        </figure>
        <figure className="portrait-frame after-frame">
          <span className="frame-corner" aria-hidden="true" />
          <div className="ivory-mat"><TryOnFrame result={result} crop={avatar.afterCrop} label={`${avatar.name} 穿着 ${garment.name} 的真实试穿结果`} /></div>
          <figcaption>试穿后</figcaption>
        </figure>
        <div className="velvet-plinth" aria-hidden="true" />
      </div>
      <aside className="result-aside">
        <p className="eyebrow">LE MIROIR D’ESSAYAGE</p><h1>为你呈现，<br />这一身。</h1>
        <div className="product-panel"><small>{result.lookId}</small><h2>{garment.name}</h2><p>{garment.material}</p><strong>{garment.price}</strong></div>
        <button className="primary-button result-cta" type="button" onClick={onQr}><Smartphone size={19} /> 扫码带到手机</button>
        <div className="result-secondary"><button className="secondary-button" type="button" onClick={onGarment}>换一件</button><button className="secondary-button" type="button" onClick={onAvatar}><UserRound size={16} /> 换个人物</button></div>
      </aside>
    </section>
  );
}
