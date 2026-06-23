import type { PioConfig } from "../types/config";

// Pio 看板娘配置
export const pioConfig: PioConfig = {
  enable: true, // 启用看板娘
  models: ["/pio/models/NOIR/noir.model3.json"], // 默认模型路径
  position: "left", // 模型位置
  width: 280, // 默认宽度
  height: 250, // 默认高度
  mode: "draggable", // 默认为可拖拽模式
  hiddenOnMobile: true, // 默认在移动设备上隐藏
  hideAboutMenu: false, // 隐藏内置 About 菜单按钮
  dialog: {
    welcome: "欢迎来到 星雫の小窝 ！", // 欢迎词
    touch: ["你在干嘛?", "拿开你的手!", "别碰我!", "哈!"], // 触摸提示
    home: "点击返回主页!", // 首页提示
    skin: ["Want to see my new outfit?", "The new outfit looks great~"], // 换装提示
    close: "QWQ See you next time~", // 关闭提示
    link: "https://blog.nekoqwq.top/about", // 关于链接
  },
};
