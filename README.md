# MAISON ÉLAN V3.1｜巴黎高定沙龙虚拟试衣

面向商场公共大屏的 React + Vite 高保真原型。V3.1 以奶油提花墙布、雕花黄铜、酒红天鹅绒、胡桃木和象牙白内衬构成「巴黎高定沙龙」，提供 4 位虚拟人物 × 8 件成衣的 32 个显式结果，并通过一次性造型编号承接手机端造型卡。

## 本地运行与验证

```bash
pnpm install
pnpm run dev
pnpm run test
pnpm run build
```

## Query 验证入口

- `?view=welcome`：封面。
- `?view=avatar`：人物肖像墙。
- `?view=wardrobe`：胡桃木高定衣橱。
- `?view=generating&avatar=aya&garment=gown`：生成过程。
- `?view=result&avatar=lina&garment=gown`：Lina × Céleste 双图结果。
- `?view=result&avatar=ines&garment=blazer`：另一人物结果。
- `?view=mobile&avatar=aya&garment=shirt`：手机造型卡。
- `?view=failed&avatar=claire&garment=trench`：失败恢复页。

人物值：`ines`、`aya`、`claire`、`lina`。服装值：`blazer`、`knit`、`shirt`、`trench`、`dress`、`skirt`、`leather`、`gown`。

## V3.1 功能

- 结果页使用左右并排、等大 3:4 前后双画框，无滑杆、分割线和细节冗余控件。
- 每位人物提供独立 `beforeCrop` / `afterCrop`，统一头顶、肩线、腰线与脚底视觉基准。
- 32 个组合继续显式映射；结果预加载失败进入恢复页，不使用替代图片。
- 人物肖像墙、胡桃木衣橱、纸样与金线生成、黄铜画框和手机交付卡统一为巴黎高定沙龙语言。
- 保留失败重试、取消生成、二维码、手机端、60 秒遮罩、10 分钟删除和主动删除。
- 所有叙事动效支持 `prefers-reduced-motion`。

## 原型边界

本项目不接入实时虚拟试衣 AI、登录、真实库存、订单或支付。结果为 32 个预先制作并明确映射的人物 × 服装图像；价格、库存、尺码、收藏、预约和购物袋均为演示数据。
