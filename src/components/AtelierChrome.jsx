import QRCode from 'react-qr-code';
import { LockKeyhole, Trash2, X } from 'lucide-react';

export function AtelierHeader({ screen, onDelete }) {
  const labels = { avatar: '人物', wardrobe: '衣橱', generating: '生成', failed: '恢复', result: '镜厅' };
  if (screen === 'welcome' || screen === 'mobile') return null;
  return <header className="atelier-header"><div><strong>MAISON ÉLAN</strong><span>ATELIER DE L’ESSAYAGE</span></div><p>{labels[screen] || 'ATELIER'} · COLLECTION 08</p><button className="delete-button" type="button" onClick={onDelete}><Trash2 size={16} /> 结束并删除</button></header>;
}

export function PrivacyFooter({ lookId }) {
  return <footer className="privacy-footer"><span><LockKeyhole size={14} /> 虚拟人物 · 10 分钟后删除</span>{lookId && <span>一次性造型 {lookId}</span>}</footer>;
}

export function PrivacyVeil({ onReveal, onDelete }) {
  return <div className="privacy-veil" role="dialog" aria-modal="true"><LockKeyhole size={36} /><p className="eyebrow">PRIVACY PROTECTION</p><h2>试穿结果已隐藏</h2><p>大屏 60 秒无操作，画面已被隐私遮罩保护。</p><button className="primary-button" type="button" onClick={onReveal}>继续查看本次结果</button><button className="text-button" type="button" onClick={onDelete}>结束并删除</button></div>;
}

export function LookTransfer({ result, onClose, onContinue }) {
  const value = `${window.location.origin}${window.location.pathname}?view=mobile&avatar=${result.avatarId}&garment=${result.garmentId}`;
  return <div className="dialog-backdrop" onMouseDown={onClose}><section className="qr-dialog" role="dialog" aria-modal="true" aria-labelledby="qr-title" onMouseDown={(event) => event.stopPropagation()}><button className="icon-button qr-close" type="button" onClick={onClose} aria-label="关闭"><X /></button><p className="eyebrow">LOOK TRANSFER</p><h2 id="qr-title">将造型折叠进手机</h2><button className="qr-code" type="button" onClick={onContinue} aria-label="模拟扫码进入手机端"><QRCode value={value} size={168} bgColor="#f7f0e3" fgColor="#18352b" /></button><strong>{result.lookId}</strong><p>二维码仅包含一次性造型编号，不含身份信息。</p><button className="primary-button" type="button" onClick={onContinue}>在手机端继续</button></section></div>;
}
