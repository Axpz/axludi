export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  file: string;
  thumbnailColor: string; // 渐变色背景
  keywords: string[];
  category: string;
  plays: string; // 模拟游玩次数，如 "12k"
  rating: number; // 4.5
}

export const games: Game[] = [
  {
    id: '1',
    title: 'Magic Bubble Pop',
    slug: 'magic-bubble-pop',
    description: 'Match colors, aim precisely, and clear the board in this addictive puzzle game.',
    file: 'magic-bubble-pop.html',
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
    thumbnailColor: 'from-amber-400 via-orange-500 to-red-600',
    keywords: ['reflex', 'speed'],
    category: 'Arcade',
    plays: '230k',
    rating: 4.9
  }
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
