// アプリケーション定数
export const APP_CONFIG = {
  name: 'Yuzuki.Nishi Portfolio',
  description: 'テクノロジーで社会をより良く',
  url: 'https://your-portfolio-domain.com',
  author: {
    name: '学生エンジニア',
    university: '駒澤大学',
    faculty: '文学部社会学科',
    github: 'https://github.com',
    zenn: 'https://zenn.dev/you_ik',
  },
} as const;

// ナビゲーション項目
export const NAV_ITEMS = [
  { href: '#about', label: '紹介' },
  { href: '#skills', label: 'スキル' },
  { href: '#experience', label: '経歴' },
  { href: '#blog', label: 'ブログ' },
  { href: '#contact', label: 'お問い合わせ' },
] as const;

// ソーシャルリンク
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Yuzuki-png',
    icon: 'github',
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/you_ik',
    icon: 'zenn',
  },
] as const;

// 技術スタック
export const TECH_STACK = [
  'React / Next.js',
  'TypeScript',
  'Node.js',
  'Go',
  'AWS',
  'Flutter',
] as const; 