import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { avatars } from '../data';

export default function AvatarGallery({ selected, onSelect, onContinue, onBack }) {
  return (
    <section className="atelier-page avatar-page salon-page animate-in">
      <header className="page-intro">
        <button className="back-button" type="button" onClick={onBack}><ArrowLeft size={17} /> 返回工坊入口</button>
        <p className="eyebrow">SILHOUETTE GALLERY</p><h1>选择与你相近的轮廓</h1><p>从四位虚拟人物中选择一位。</p>
      </header>
      <div className="avatar-grid">
        {avatars.map((avatar) => (
          <button className={`avatar-card ${selected === avatar.id ? 'is-selected' : ''}`} type="button" key={avatar.id} aria-pressed={selected === avatar.id} onClick={() => onSelect(avatar.id)}>
            <span className="gold-stitch" /><img src={avatar.image} alt={`${avatar.name} 虚拟人物，${avatar.meta}`} /><span className="selection-mark"><Check size={16} /></span>
            <span className="avatar-copy"><strong>{avatar.name}</strong><em>{avatar.meta} · {avatar.fit}</em></span>
          </button>
        ))}
      </div>
      <footer className="selection-footer"><span>虚拟人物 · 10 分钟后删除</span><button className="primary-button" type="button" onClick={onContinue}>确认人物，查看衣橱 <ChevronRight size={18} /></button></footer>
    </section>
  );
}
