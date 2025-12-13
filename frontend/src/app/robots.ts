import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://games.axpz.com'; // ⚠️ 部署前记得改成你的域名

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/private/', '/admin/'], // 预留屏蔽规则
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

