import avatarInes from './assets/avatar-ines.jpg';
import avatarAya from './assets/avatar-aya.jpg';
import avatarClaire from './assets/avatar-claire.jpg';
import avatarLina from './assets/avatar-lina.jpg';
import garmentBlazer from './assets/garment-blazer.jpg';
import garmentKnit from './assets/garment-knit.jpg';
import garmentShirt from './assets/garment-shirt.jpg';
import garmentTrench from './assets/garment-trench.jpg';
import garmentDress from './assets/garment-dress.jpg';
import garmentSkirt from './assets/garment-skirt.jpg';
import garmentLeather from './assets/garment-leather.jpg';
import garmentGown from './assets/garment-gown.jpg';
import lookBlazer from './assets/v3-look-blazer.jpg';
import lookKnit from './assets/v3-look-knit.jpg';
import lookShirt from './assets/v3-look-shirt.jpg';
import lookTrench from './assets/v3-look-trench.jpg';
import lookDress from './assets/v3-look-dress.jpg';
import lookSkirt from './assets/v3-look-skirt.jpg';
import lookLeather from './assets/v3-look-leather.jpg';
import lookGown from './assets/v3-look-gown.jpg';

export const avatars = [
  { id: 'ines', name: 'Inès', meta: '165 cm · 纤细', image: avatarInes, fit: '利落线条', beforeCrop: { key: 'ines-before', position: '50% 48%', scale: 1.03, origin: 'center center' }, afterCrop: { key: 'ines-after', x: '0.6%', y: '49%', scale: 1.035 } },
  { id: 'aya', name: 'Aya', meta: '170 cm · 匀称', image: avatarAya, fit: '舒展比例', beforeCrop: { key: 'aya-before', position: '50% 46%', scale: 1.04, origin: 'center center' }, afterCrop: { key: 'aya-after', x: '33.5%', y: '48%', scale: 1.035 } },
  { id: 'claire', name: 'Claire', meta: '175 cm · 高挑', image: avatarClaire, fit: '修长轮廓', beforeCrop: { key: 'claire-before', position: '50% 47%', scale: 1.02, origin: 'center center' }, afterCrop: { key: 'claire-after', x: '66.5%', y: '49%', scale: 1.035 } },
  { id: 'lina', name: 'Lina', meta: '168 cm · 丰盈', image: avatarLina, fit: '柔和曲线', beforeCrop: { key: 'lina-before', position: '50% 20%', scale: 1.62, origin: 'center top' }, afterCrop: { key: 'lina-after', x: '99.35%', y: '48%', scale: 1.035 } },
];

export const garments = [
  { id: 'blazer', number: '01', french: 'Veste Cintrée', name: 'Élan 收腰西装', material: '羊毛混纺', color: '勃艮第红', price: '¥2,680', tag: '通勤', stock: '本店有货', image: garmentBlazer, cut: '收束腰线与利落驳领', advice: '搭配象牙白内搭，让结构剪裁成为重点。' },
  { id: 'knit', number: '02', french: 'Maille Cachemire', name: 'Rive 羊绒针织衫', material: '轻柔羊绒', color: '燕麦色', price: '¥1,680', tag: '日常', stock: '本店有货', image: garmentKnit, cut: '柔软落肩与轻松廓形', advice: '搭配直筒长裤，保留羊绒的轻盈感。' },
  { id: 'shirt', number: '03', french: 'Chemise de Soie', name: 'Aube 真丝衬衫', material: '桑蚕丝', color: '象牙白', price: '¥1,880', tag: '通勤', stock: '本店有货', image: garmentShirt, cut: '流动领口与微宽袖型', advice: '将领口自然打开，呈现克制的光泽。' },
  { id: 'trench', number: '04', french: 'Trench Léger', name: 'Lumière 轻盈风衣', material: '防泼水棉', color: '奶油白', price: '¥2,980', tag: '周末', stock: '本店有货', image: garmentTrench, cut: '长线条与可调节腰带', advice: '腰带松系，保留从容的城市步调。' },
  { id: 'dress', number: '05', french: 'Robe Satinée', name: 'Noir 丝缎连衣裙', material: '真丝混纺', color: '墨黑', price: '¥3,280', tag: '晚宴', stock: '仅余 2 件', image: garmentDress, cut: '斜裁腰线与流动裙摆', advice: '以简洁首饰回应丝缎的低调光泽。' },
  { id: 'skirt', number: '06', french: 'Jupe Asymétrique', name: 'Fumée 不对称半身裙', material: '精纺羊毛', color: '烟灰', price: '¥2,180', tag: '都市', stock: '本店有货', image: garmentSkirt, cut: '错落下摆与清晰腰头', advice: '搭配贴身针织，突出不对称轮廓。' },
  { id: 'leather', number: '07', french: 'Veste en Cuir', name: 'Sienne 短款皮夹克', material: '柔软羊皮', color: '深棕', price: '¥4,280', tag: '周末', stock: '仅余 3 件', image: garmentLeather, cut: '短款比例与弧形袖线', advice: '与柔软下装组合，平衡皮革的力量感。' },
  { id: 'gown', number: '08', french: 'Robe du Soir', name: 'Céleste 垂坠晚宴礼服', material: '醋酸缎面', color: '香槟金', price: '¥4,680', tag: '晚宴', stock: '门店限定', image: garmentGown, cut: '垂坠领口与曳地裙摆', advice: '保持配饰克制，让香槟色随光线流动。' },
];

export const garmentFilters = ['全部', '通勤', '日常', '周末', '都市', '晚宴'];
export const generationStages = [
  { at: 0, label: '匹配身体比例', note: '读取人物轮廓' },
  { at: 34, label: '调整服装剪裁', note: '校准领口与腰线' },
  { at: 70, label: '还原面料光影', note: '展开自然垂坠' },
];
export const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const makeResult = (avatarId, garmentId, image, position, lookId) => ({ avatarId, garmentId, image, position, lookId, status: 'ready' });
export const tryOnResults = [
  makeResult('ines', 'blazer', lookBlazer, '0%', 'ME-0101'), makeResult('aya', 'blazer', lookBlazer, '33.333%', 'ME-0102'), makeResult('claire', 'blazer', lookBlazer, '66.666%', 'ME-0103'), makeResult('lina', 'blazer', lookBlazer, '100%', 'ME-0104'),
  makeResult('ines', 'knit', lookKnit, '0%', 'ME-0201'), makeResult('aya', 'knit', lookKnit, '33.333%', 'ME-0202'), makeResult('claire', 'knit', lookKnit, '66.666%', 'ME-0203'), makeResult('lina', 'knit', lookKnit, '100%', 'ME-0204'),
  makeResult('ines', 'shirt', lookShirt, '0%', 'ME-0301'), makeResult('aya', 'shirt', lookShirt, '33.333%', 'ME-0302'), makeResult('claire', 'shirt', lookShirt, '66.666%', 'ME-0303'), makeResult('lina', 'shirt', lookShirt, '100%', 'ME-0304'),
  makeResult('ines', 'trench', lookTrench, '0%', 'ME-0401'), makeResult('aya', 'trench', lookTrench, '33.333%', 'ME-0402'), makeResult('claire', 'trench', lookTrench, '66.666%', 'ME-0403'), makeResult('lina', 'trench', lookTrench, '100%', 'ME-0404'),
  makeResult('ines', 'dress', lookDress, '0%', 'ME-0501'), makeResult('aya', 'dress', lookDress, '33.333%', 'ME-0502'), makeResult('claire', 'dress', lookDress, '66.666%', 'ME-0503'), makeResult('lina', 'dress', lookDress, '100%', 'ME-0504'),
  makeResult('ines', 'skirt', lookSkirt, '0%', 'ME-0601'), makeResult('aya', 'skirt', lookSkirt, '33.333%', 'ME-0602'), makeResult('claire', 'skirt', lookSkirt, '66.666%', 'ME-0603'), makeResult('lina', 'skirt', lookSkirt, '100%', 'ME-0604'),
  makeResult('ines', 'leather', lookLeather, '0%', 'ME-0701'), makeResult('aya', 'leather', lookLeather, '33.333%', 'ME-0702'), makeResult('claire', 'leather', lookLeather, '66.666%', 'ME-0703'), makeResult('lina', 'leather', lookLeather, '100%', 'ME-0704'),
  makeResult('ines', 'gown', lookGown, '0%', 'ME-0801'), makeResult('aya', 'gown', lookGown, '33.333%', 'ME-0802'), makeResult('claire', 'gown', lookGown, '66.666%', 'ME-0803'), makeResult('lina', 'gown', lookGown, '100%', 'ME-0804'),
];

export function getLookResult(avatarId, garmentId) {
  return tryOnResults.find((result) => result.avatarId === avatarId && result.garmentId === garmentId) || null;
}
