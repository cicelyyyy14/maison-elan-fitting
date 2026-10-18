import { ChevronRight, Scissors, ShieldCheck } from 'lucide-react';
import atelierCover from '../assets/atelier-cover.jpg';

export default function AtelierCover({ onStart }) {
  return (
    <section className="atelier-cover animate-in">
      <img className="cover-fabric" src={atelierCover} alt="奶油色法式刺绣工坊织物" />
      <div className="cover-vignette" />
      <div className="cover-tools" aria-hidden="true"><Scissors /><span>ÉCHANTILLON N°08</span></div>
      <div className="silk-label">
        <div className="embroidered-line" aria-hidden="true" />
        <p className="cover-kicker">ATELIER DE L’ESSAYAGE</p>
        <h1>MAISON ÉLAN</h1>
        <p className="cover-collection">COLLECTION 08 · PARIS</p>
        <p className="cover-intro">选择一件成衣，预览真实上身效果。</p>
        <button className="primary-button cover-button" type="button" onClick={onStart}>进入高定衣橱 <ChevronRight size={19} /></button>
        <div className="cover-facts"><span>无需拍照</span><span>无需登录</span><span>约 8 秒</span></div>
        <p className="cover-privacy"><ShieldCheck size={15} />仅使用虚拟人物，本次结果将在 10 分钟后删除</p>
      </div>
      <span className="cover-folio">MAISON DE COUTURE · DEPUIS 1986</span>
    </section>
  );
}
