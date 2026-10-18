import { describe, expect, it } from 'vitest';
import { avatars, garments, getLookResult, tryOnResults } from './data';

const avatarImages = new Set(avatars.map((item) => item.image));
const garmentImages = new Set(garments.map((item) => item.image));

describe('V3 试穿结果映射', () => {
  it('在数据层显式注册完整且唯一的 32 个组合', () => {
    expect(tryOnResults).toHaveLength(32);
    expect(new Set(tryOnResults.map((item) => `${item.avatarId}:${item.garmentId}`)).size).toBe(32);
    expect(new Set(tryOnResults.map((item) => item.lookId)).size).toBe(32);
    for (const avatar of avatars) {
      for (const garment of garments) {
        const result = getLookResult(avatar.id, garment.id);
        expect(result).toMatchObject({ avatarId: avatar.id, garmentId: garment.id, status: 'ready' });
      }
    }
  });

  it('结果仅使用 V3 四联幅，不以人物原图或商品图兜底', () => {
    for (const result of tryOnResults) {
      expect(result.image).toBeTruthy();
      expect(avatarImages.has(result.image)).toBe(false);
      expect(garmentImages.has(result.image)).toBe(false);
      expect(['0%', '33.333%', '66.666%', '100%']).toContain(result.position);
    }
  });

  it('4 位人物均有独立且完整的前后裁切配置', () => {
    expect(new Set(avatars.map((item) => item.beforeCrop.key)).size).toBe(4);
    expect(new Set(avatars.map((item) => item.afterCrop.key)).size).toBe(4);
    for (const avatar of avatars) {
      expect(avatar.beforeCrop).toEqual(expect.objectContaining({ position: expect.any(String), scale: expect.any(Number) }));
      expect(avatar.afterCrop).toEqual(expect.objectContaining({ x: expect.any(String), y: expect.any(String), scale: expect.any(Number) }));
    }
  });

  it('Lina 与礼服映射到明确的非默认结果', () => {
    expect(getLookResult('lina', 'gown')).toMatchObject({ lookId: 'ME-0804', position: '100%' });
    expect(getLookResult('unknown', 'gown')).toBeNull();
  });
});
