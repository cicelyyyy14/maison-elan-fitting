import { useCallback, useMemo, useState } from 'react';
import AtelierCover from './components/AtelierCover';
import AvatarGallery from './components/AvatarGallery';
import CoutureWardrobe from './components/CoutureWardrobe';
import AtelierGeneration from './components/AtelierGeneration';
import FailureView from './components/FailureView';
import FittingMirror from './components/FittingMirror';
import MobileLookCard from './components/MobileLookCard';
import { AtelierHeader, LookTransfer, PrivacyFooter, PrivacyVeil } from './components/AtelierChrome';
import { avatars, garments, getLookResult } from './data';
import { useGeneration } from './hooks/useGeneration';
import { usePrivacySession } from './hooks/usePrivacySession';
import './styles.css';
import './v3-atelier.css';

const readQuery = () => {
  const query = new URLSearchParams(window.location.search);
  const rawView = query.get('view');
  const view = rawView === 'garment' ? 'wardrobe' : rawView;
  return {
    screen: ['welcome', 'avatar', 'wardrobe', 'generating', 'failed', 'result', 'mobile'].includes(view) ? view : 'welcome',
    avatar: avatars.some((item) => item.id === query.get('avatar')) ? query.get('avatar') : 'ines',
    garment: garments.some((item) => item.id === query.get('garment')) ? query.get('garment') : 'blazer',
  };
};

export default function App() {
  const initial = useMemo(readQuery, []);
  const [screen, setScreen] = useState(initial.screen);
  const [avatarId, setAvatarId] = useState(initial.avatar);
  const [garmentId, setGarmentId] = useState(initial.garment);
  const [showQr, setShowQr] = useState(false);
  const [failureReason, setFailureReason] = useState(initial.screen === 'failed' ? 'timeout' : '');
  const [forceFailure, setForceFailure] = useState(initial.screen === 'failed');
  const [toast, setToast] = useState('');
  const avatar = avatars.find((item) => item.id === avatarId);
  const garment = garments.find((item) => item.id === garmentId);
  const result = getLookResult(avatarId, garmentId);

  const notify = useCallback((message) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2400);
  }, []);

  const reset = useCallback((message = '') => {
    setScreen('welcome'); setAvatarId('ines'); setGarmentId('blazer'); setShowQr(false); setForceFailure(false); setFailureReason('');
    if (message) notify(message);
  }, [notify]);

  const onSuccess = useCallback(() => { setForceFailure(false); setScreen('result'); }, []);
  const onFailure = useCallback((reason) => { setForceFailure(false); setFailureReason(reason); setScreen('failed'); }, []);
  const generation = useGeneration({ active: screen === 'generating', result, forceFailure, onSuccess, onFailure });
  const privacy = usePrivacySession({ sensitive: screen === 'result', onExpire: useCallback(() => reset('本次会话与一次性编号已删除'), [reset]) });

  const beginGeneration = () => {
    if (!result) { setFailureReason('asset'); setScreen('failed'); return; }
    setScreen('generating');
  };
  const deleteSession = () => { reset('本次试穿数据已删除'); privacy.resetClock(); };

  if (screen === 'mobile') return <><MobileLookCard avatar={avatar} garment={garment} result={result} onBack={() => setScreen('result')} notify={notify} />{toast && <div className="toast" role="status">{toast}</div>}</>;

  return (
    <div className={`app-shell screen-${screen}`}>
      <AtelierHeader screen={screen} onDelete={deleteSession} />
      <main className="main-stage">
        {screen === 'welcome' && <AtelierCover onStart={() => setScreen('avatar')} />}
        {screen === 'avatar' && <AvatarGallery selected={avatarId} onSelect={setAvatarId} onContinue={() => setScreen('wardrobe')} onBack={() => setScreen('welcome')} />}
        {screen === 'wardrobe' && <CoutureWardrobe avatar={avatar} selected={garmentId} onSelect={setGarmentId} onContinue={beginGeneration} onBack={() => setScreen('avatar')} />}
        {screen === 'generating' && <AtelierGeneration avatar={avatar} garment={garment} result={result} {...generation} onCancel={() => setScreen('wardrobe')} />}
        {screen === 'failed' && <FailureView avatar={avatar} garment={garment} reason={failureReason} onRetry={() => { setForceFailure(false); setScreen('generating'); }} onChange={() => setScreen('wardrobe')} onMobile={() => setScreen('mobile')} />}
        {screen === 'result' && <FittingMirror avatar={avatar} garment={garment} result={result} onQr={() => setShowQr(true)} onGarment={() => setScreen('wardrobe')} onAvatar={() => setScreen('avatar')} />}
      </main>
      {!['welcome', 'generating'].includes(screen) && <PrivacyFooter lookId={result?.lookId} />}
      {showQr && <LookTransfer result={result} onClose={() => setShowQr(false)} onContinue={() => { setShowQr(false); setScreen('mobile'); }} />}
      {privacy.hidden && screen === 'result' && <PrivacyVeil onReveal={privacy.reveal} onDelete={deleteSession} />}
      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  );
}
