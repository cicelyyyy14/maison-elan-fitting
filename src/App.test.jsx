import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from './App';

const setQuery = (query = '') => window.history.replaceState({}, '', `/${query}`);

afterEach(() => {
  cleanup();
  setQuery();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('MAISON ÉLAN V3 法式高定工坊', () => {
  it('从全新封面进入人物与仅衣服衣橱', () => {
    render(<App />);
    expect(screen.queryByText(/遇见更像你的/)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /进入高定衣橱/ }));
    expect(screen.getByText('选择与你相近的轮廓')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /确认人物，查看衣橱/ }));
    expect(screen.getByText('高定衣橱')).toBeInTheDocument();
    expect(screen.getByAltText(/Élan 收腰西装 无模特成衣商品图/)).toBeInTheDocument();
  });

  it('支持非默认结果 query 直接预览并显示匹配造型', () => {
    setQuery('?view=result&avatar=lina&garment=gown');
    render(<App />);
    expect(screen.getByText('ME-0804')).toBeInTheDocument();
    expect(screen.getAllByText(/试穿前|试穿后/)).toHaveLength(2);
    expect(screen.queryByRole('slider')).not.toBeInTheDocument();
    expect(screen.queryByText('造型已完成')).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Lina 穿着 Céleste 垂坠晚宴礼服/ })).toBeInTheDocument();
  });

  it('支持衣橱、失败和手机端 query 预览', () => {
    setQuery('?view=wardrobe&avatar=aya&garment=shirt');
    const view = render(<App />);
    expect(screen.getByText('高定衣橱')).toBeInTheDocument();
    view.unmount();
    setQuery('?view=failed&avatar=aya&garment=shirt');
    render(<App />);
    expect(screen.getByText('未能完成本次试穿')).toBeInTheDocument();
    cleanup();
    setQuery('?view=mobile&avatar=claire&garment=trench');
    render(<App />);
    expect(screen.getByText('Lumière 轻盈风衣')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /加入购物袋/ })).toBeInTheDocument();
  });

  it('非默认组合完成三段生成，且生成中可取消并保留选择', async () => {
    vi.useFakeTimers();
    class ReadyImage { set src(value) { this.value = value; window.setTimeout(() => this.onload?.(), 0); } }
    vi.stubGlobal('Image', ReadyImage);
    setQuery('?view=wardrobe&avatar=aya&garment=gown');
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /开始生成试穿效果/ }));
    expect(screen.getByRole('heading', { name: '匹配身体比例' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /取消生成并保留选择/ }));
    expect(screen.getAllByText('Céleste 垂坠晚宴礼服').length).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole('button', { name: /开始生成试穿效果/ }));
    await act(async () => { await vi.advanceTimersByTimeAsync(7600); });
    await act(async () => { await vi.advanceTimersByTimeAsync(400); });
    expect(screen.getByText('ME-0802')).toBeInTheDocument();
  });

  it('60 秒隐藏结果，10 分钟后删除会话', async () => {
    vi.useFakeTimers();
    setQuery('?view=result&avatar=lina&garment=gown');
    render(<App />);
    await act(async () => { await vi.advanceTimersByTimeAsync(61000); });
    expect(screen.getByText('试穿结果已隐藏')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /继续查看本次结果/ }));
    expect(screen.queryByText('试穿结果已隐藏')).not.toBeInTheDocument();
    await act(async () => { await vi.advanceTimersByTimeAsync(600000); });
    expect(screen.getByRole('button', { name: /进入高定衣橱/ })).toBeInTheDocument();
  });

  it('二维码进入手机造型卡，主动删除会清空并返回封面', () => {
    setQuery('?view=result&avatar=lina&garment=gown');
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /扫码带到手机/ }));
    expect(screen.getByText('将造型折叠进手机')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /在手机端继续/ }));
    expect(screen.getByText(/MY LOOK CARD/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /返回大屏结果/ }));
    fireEvent.click(screen.getByRole('button', { name: /结束并删除/ }));
    expect(screen.getByRole('button', { name: /进入高定衣橱/ })).toBeInTheDocument();
  });
});
