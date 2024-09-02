import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "文档中心",
  description: "步平凡的文档中心",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
