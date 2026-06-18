// 站点内容区域配置
const contentSections = [
  { id: "home", title: "首页", keywords: ["开云体育", "体育竞猜", "首页推荐"], path: "/" },
  { id: "events", title: "赛事", keywords: ["开云体育", "体育赛事", "实时比分"], path: "/events" },
  { id: "promotions", title: "优惠活动", keywords: ["开云体育", "优惠", "奖金"], path: "/promotions" },
  { id: "live", title: "直播", keywords: ["开云体育", "直播", "高清"], path: "/live" },
  { id: "help", title: "帮助中心", keywords: ["开云体育", "帮助", "客服"], path: "/help" }
];

// 标签集合与映射
const tagCategories = {
  sports: ["足球", "篮球", "网球", "电竞"],
  bonus: ["首存", "返水", "红包", "VIP"],
  region: ["中国大陆", "东南亚", "欧洲"]
};

// 示例站点域名（仅作配置数据）
const siteDomain = "https://skygame-kaiyun.com.cn";

// 普通搜索过滤函数（基于关键词和标签）
function searchSections(query, sections = contentSections) {
  if (!query || query.trim() === "") return sections;
  const lowerQuery = query.toLowerCase();
  return sections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const keywordMatch = section.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
    const idMatch = section.id.toLowerCase().includes(lowerQuery);
    return titleMatch || keywordMatch || idMatch;
  });
}

// 标签过滤 —— 根据标签名称搜索匹配的区域
function filterByTags(tagNames, sections = contentSections) {
  if (!tagNames || tagNames.length === 0) return sections;
  const lowerTags = tagNames.map(t => t.toLowerCase());
  return sections.filter(section => {
    return section.keywords.some(kw => lowerTags.some(tag => kw.toLowerCase().includes(tag)));
  });
}

// 获取所有关键词去重列表
function getAllKeywords() {
  const kwSet = new Set();
  contentSections.forEach(s => s.keywords.forEach(kw => kwSet.add(kw)));
  // 额外加入核心关键词
  kwSet.add("开云体育");
  return Array.from(kwSet);
}

// 简单统计信息
function getContentStats() {
  return {
    totalSections: contentSections.length,
    totalKeywords: getAllKeywords().length,
    siteDomain: siteDomain,
    lastUpdated: "2025-03-01"
  };
}

// 导出模块（支持 CommonJS 与浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    contentSections,
    tagCategories,
    siteDomain,
    searchSections,
    filterByTags,
    getAllKeywords,
    getContentStats
  };
} else {
  window.__contentMap = {
    contentSections,
    tagCategories,
    siteDomain,
    searchSections,
    filterByTags,
    getAllKeywords,
    getContentStats
  };
}