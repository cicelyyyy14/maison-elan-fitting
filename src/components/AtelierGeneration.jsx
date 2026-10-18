import { X } from 'lucide-react';
import { generationStages } from '../data';

export default function AtelierGeneration({ avatar, garment, result, progress, onCancel }) {
  const active = [...generationStages].reverse().find((item) => progress >= item.at) || generationStages[0];
  return (
    <section className="generation-page salon-page animate-in" aria-live="polite">
      <div className="pattern-desk"><img src={avatar.image} alt={`${avatar.name} 人物轮廓`} /><svg className="paper-pattern" viewBox="0 0 400 700" aria-hidden="true"><path d="M95 82 L202 38 L304 90 L272 255 L312 640 L84 640 L129 252 Z" /></svg><svg className="gold-thread" viewBox="0 0 400 700" aria-hidden="true"><path d="M200 38 C142 66 123 142 138 206 C94 286 103 403 129 514 C151 609 187 664 200 681 C220 650 254 593 274 510 C302 394 307 288 264 205 C280 142 258 66 200 38Z" /></svg><i className="pearl-pin pin-one" aria-hidden="true" /><i className="pearl-pin pin-two" aria-hidden="true" /><div className="garment-swatch"><img src={garment.image} alt={`${garment.name} 成衣剪影`} /><span>{garment.material}</span></div></div>
      <div className="generation-panel"><p className="eyebrow">ATELIER EN COURS</p><h1>{active.label}</h1><p>{active.note}</p><ol className="generation-stages">{generationStages.map((stage, index) => <li className={progress >= stage.at ? 'is-active' : ''} key={stage.at}><span>{index + 1}</span><div><strong>{stage.label}</strong></div></li>)}</ol><div className="progress-track" role="progressbar" aria-valuenow={progress} aria-label="生成进度"><div style={{ width: `${progress}%` }} /></div><div className="progress-meta"><strong>{progress}%</strong></div><button className="secondary-button" type="button" onClick={onCancel}><X size={17} /> 取消生成并保留选择</button></div>
    </section>
  );
}
