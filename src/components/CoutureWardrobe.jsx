import { useMemo, useState } from 'react';
import { ArrowLeft, Check, ChevronRight, Sparkles } from 'lucide-react';
import { garmentFilters, garments } from '../data';

export default function CoutureWardrobe({ avatar, selected, onSelect, onContinue, onBack }) {
  const [filter, setFilter] = useState('全部');
  const visible = useMemo(() => filter === '全部' ? garments : garments.filter((item) => item.tag === filter), [filter]);
  const chosen = garments.find((item) => item.id === selected);
  return (
    <section className="wardrobe-page salon-page animate-in">
      <header className="wardrobe-head"><div><button className="back-button" type="button" onClick={onBack}><ArrowLeft size={17} /> 更换人物</button><p className="eyebrow">LE VESTIAIRE</p><h1>高定衣橱</h1><p>为 {avatar.name} 选择一件成衣。</p></div><div className="avatar-chip"><img src={avatar.image} alt="" /><span><small>MANNEQUIN</small><strong>{avatar.name}</strong></span></div></header>
      <nav className="wardrobe-filter" aria-label="服装场景筛选">{garmentFilters.map((item) => <button className={filter === item ? 'is-active' : ''} type="button" key={item} onClick={() => setFilter(item)}>{item}</button>)}</nav>
      <div className="garment-grid">{visible.map((item, index) => (
        <article className={`garment-card ${selected === item.id ? 'is-selected' : ''}`} key={item.id} style={{ '--delay': `${index * 55}ms` }}>
          <button className="garment-select" type="button" aria-label={`选择 ${item.name}`} aria-pressed={selected === item.id} onClick={() => onSelect(item.id)}><span className="brass-number">{item.number}</span><img src={item.image} alt={`${item.name} 无模特成衣商品图`} /><span className="selection-mark"><Check size={15} /></span></button>
          <div className="garment-copy"><strong>{item.name}</strong><small>{item.material}</small><div><b>{item.price}</b></div></div>
        </article>
      ))}</div>
      <footer className="wardrobe-confirm"><div><small>已选</small><strong>{chosen.name}</strong><span>{chosen.material}</span></div><button className="primary-button" type="button" onClick={onContinue}><Sparkles size={18} /> 开始生成试穿效果 <ChevronRight size={18} /></button></footer>
    </section>
  );
}
