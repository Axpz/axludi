export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  file: string;
  cover: string;
  thumbnailColor: string; // 渐变色背景
  keywords: string[];
  category: string;
  plays: string; // 模拟游玩次数，如 "12k"
  rating: number; // 4.5
}

export const games: Game[] = [
  {
    id: '5',
    title: '我爱记单词 - 打败医学怪兽',
    slug: 'beat-medical-monster',
    description: '打败医学怪兽，拯救世界。',
    file: 'beat-medical-monster.html',
    cover: 'beat-medical-monster.jpg',
    thumbnailColor: 'from-pink-500 via-rose-500 to-purple-600',
    keywords: ['医学怪兽', '学英语', '我爱记单词'],
    category: '冒险',
    plays: '0',
    rating: 0
  },
  {
    id: '1',
    title: 'Magic Bubble Pop',
    slug: 'magic-bubble-pop',
    description: 'Match colors, aim precisely, and clear the board in this addictive puzzle game.',
    file: 'magic-bubble-pop.html',
    cover: 'magic-bubble-pop.jpg',
    thumbnailColor: 'from-pink-500 via-rose-500 to-purple-600',
    keywords: ['bubble shooter', 'puzzle'],
    category: 'Puzzle',
    plays: '85k',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Rock Paper Scissors',
    slug: 'rock-paper-scissors',
    description: 'Test your luck and strategy against the AI in this classic battle.',
    file: 'rock-paper-scissors.html',
    cover: 'rock-paper-scissors.jpg',
    thumbnailColor: 'from-blue-500 via-cyan-500 to-teal-500',
    keywords: ['classic', 'strategy'],
    category: 'Strategy',
    plays: '120k',
    rating: 4.6
  },
  {
    id: '3',
    title: 'Reaction Time',
    slug: 'reaction-time-test',
    description: 'Test your reflexes! Click as soon as the color changes.',
    file: 'reaction-time.html',
    cover: 'reaction-time.jpg',
    thumbnailColor: 'from-amber-400 via-orange-500 to-red-600',
    keywords: ['reflex', 'speed'],
    category: 'Arcade',
    plays: '230k',
    rating: 4.9
  },
  {
    id: '4',
    title: 'High Altitude Adventure',
    slug: 'high-altitude-adventure',
    description: 'Collect stars and find treasure in this high-altitude adventure.',
    file: 'high-altitude-adventure.html',
    cover: 'high-altitude-adventure.jpg',
    thumbnailColor: 'from-purple-500 via-pink-500 to-red-600',
    keywords: ['adventure', 'collect'],
    category: 'Action',
    plays: '150k',
    rating: 4.7
  }
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
