// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
  id: number;
  title: string;
  imgurl: string;
  desc: string;
  siteurl: string;
  tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
  {
    id: 1,
    title: "Astro",
    imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
    desc: "The web framework for content-driven websites",
    siteurl: "https://github.com/withastro/astro",
    tags: ["Framework"],
  },
  {
    id: 2,
    title: "Mizuki Docs",
    imgurl:
      "https://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
    desc: "Mizuki User Manual",
    siteurl: "https://docs.mizuki.mysqil.com",
    tags: ["Docs"],
  },
  {
    id: 3,
    title: "谢县广",
    imgurl: "https://www.xiexianguang.com/favicon.ico",
    desc: "永远相信美好的事情即将发生",
    siteurl: "https://www.xiexianguang.com",
    tags: ["Friend"],
  },
  {
    id: 4,
    title: "Echo",
    imgurl: "https://liveout.cn/usr/uploads/pic/icon1.jpg",
    desc: "Life is code. I will debug it.",
    siteurl: "https://www.liveout.cn/",
    tags: ["Friend"],
  },
  {
    id: 5,
    title: "罗德岛 PRTS",
    imgurl: "https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg",
    desc: "记录泰拉大陆的各项数据与前文明遗迹，愿源石的阴霾早日散去。",
    siteurl: "https://prts.wiki",
    tags: ["Friend"],
  },
  {
    id: 6,
    title: "XingHuiSamaの宝藏之地",
    imgurl: "https://bu.dusays.com/2026/03/24/69c1e38ac1846.jpg",
    desc: "今天我也要学习吗",
    siteurl: "https://www.xinghuisama.top",
    tags: ["Friend"],
  },
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
  return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
  const shuffled = [...friendsData];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
