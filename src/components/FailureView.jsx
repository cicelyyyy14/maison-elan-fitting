import { ArrowRight, RotateCcw, Scissors } from 'lucide-react';

export default function FailureView({ avatar, garment, reason, onRetry, onChange, onMobile }) {
  return (
    <section className="failure-page animate-in" role="alert">
      <div className="broken-thread"><Scissors size={34} /><span /></div>
      <p className="eyebrow">ATELIER INTERROMPU · {reason === 'timeout' ? 'TEMPS ÉCOULÉ' : 'IMAGE INDISPONIBLE'}</p>
      <h1>未能完成本次试穿</h1>
      <p>工坊没有收到完整的结果画面。我们不会用人物原图或色块代替试穿结果。</p>
      <div className="saved-selection"><span>已保留</span><strong>{avatar.name}</strong><strong>{garment.name}</strong><small>{garment.color}</small></div>
      <div className="failure-actions"><button className="primary-button" type="button" onClick={onRetry}><RotateCcw size={18} /> 重新生成</button><button className="secondary-button" type="button" onClick={onChange}>换一件成衣</button></div>
      <button className="text-button" type="button" onClick={onMobile}>在手机端稍后查看 <ArrowRight size={15} /></button>
    </section>
  );
}
