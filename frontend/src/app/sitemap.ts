import { MetadataRoute } from 'next';
import { games } from '@/lib/games';

export default function sitemap(): MetadataRoute.Sitemap {
  // ⚠️ 请将此处替换为你的真实域名
  const baseUrl = 'https://games.axpz.com';

  // 1. 静态页面（首页等）
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    // 如果有关于我们、联系页面也可以加在这里
  ];

  // 2. 动态生成的游戏页面
  const gamePages = games.map((game) => ({
    url: `${baseUrl}/game/${game.slug}`,
    lastModified: new Date(), // 实际项目中可以读取游戏文件的修改时间
    changeFrequency: 'weekly' as const, // 游戏内容本身不常变，但页面周边可能变
    priority: 0.8,
  }));

  return [...staticPages, ...gamePages];
}

