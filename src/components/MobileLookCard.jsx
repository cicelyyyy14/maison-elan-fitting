import { useState } from 'react';
import { ArrowLeft, Check, Heart, MapPin, ShoppingBag } from 'lucide-react';
import TryOnFrame from './TryOnFrame';
import { sizes } from '../data';

export default function MobileLookCard({ avatar, garment, result, onBack, notify }) {
  const [saved, setSaved] = useState(false);
  const [size, setSize] = useState('M');
  const [bag, setBag] = useState(false);
  return (
    <div className="mobile-stage">
      <div className="mobile-preview-note"><button className="text-button" type="button" onClick={onBack}><ArrowLeft size={16} /> 返回大屏结果</button><span>手机端造型卡 · 390 × 844</span></div>
      <main className="look-card animate-in">
        <header><button className="icon-button" type="button" onClick={onBack} aria-label="返回"><ArrowLeft /></button><div><strong>MAISON ÉLAN</strong><span>MON CARNET D’ATELIER</span></div><button className={`icon-button ${saved ? 'is-saved' : ''}`} type="button" aria-label="收藏造型" onClick={() => { setSaved(!saved); notify(saved ? '已取消收藏' : '造型已收藏'); }}><Heart fill={saved ? 'currentColor' : 'none'} /></button></header>
        <div className="mobile-look"><TryOnFrame result={result} crop={avatar.afterCrop} label={`${avatar.name} 穿着 ${garment.name} 的手机端造型`} /><div className="look-ticket"><small>LOOK PERSONNEL</small><b>{result.lookId}</b></div></div>
        <section className="mobile-details">
          <p className="eyebrow">MY LOOK CARD · {avatar.name}</p><div className="mobile-title"><h1>{garment.name}</h1><strong>{garment.price}</strong></div><p>{garment.material} · {garment.color}</p>
          <div className="size-option"><span>推荐尺码 <b>{size}</b></span><div>{sizes.map((item) => <button className={size === item ? 'is-active' : ''} type="button" key={item} onClick={() => setSize(item)}>{item}</button>)}</div></div>
          <div className="store-row"><MapPin size={18} /><div><strong>上海静安嘉里中心店 · {garment.stock}</strong><small>预约后为你保留至今日闭店</small></div></div>
          <div className="mobile-actions"><button className="secondary-button" type="button" onClick={() => notify('已登记到店试穿意向')}>预约试穿</button><button className="primary-button" type="button" onClick={() => { setBag(true); notify('已加入购物袋'); }}>{bag ? <Check size={17} /> : <ShoppingBag size={17} />}{bag ? '已加入' : '加入购物袋'}</button></div>
        </section>
      </main>
    </div>
  );
}
