import Link from "next/link";
import { games } from "@/lib/games";
import {
  Play,
  Flame,
  Star,
  Zap,
  Search,
  Grid,
  Gamepad2,
  Clock,
} from "lucide-react";

export default function Home() {
  const featuredGame = games[0];
  const trendingGames = games.slice(1, 4);
  const allGames = games; // 实际项目中这里应该是剩余的游戏

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* 1. Sidebar Navigation (Desktop) - 侧边栏导航 */}
      <aside className="hidden lg:block w-64 shrink-0 space-y-8">
        <div className="sticky top-24 space-y-8">
          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3">
              Discover
            </h3>
            <nav className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-primary/10 text-primary font-bold transition-colors">
                <Grid size={18} /> All Games
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium transition-colors">
                <Flame size={18} /> Trending
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium transition-colors">
                <Clock size={18} /> New Releases
              </button>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3">
              Categories
            </h3>
            <nav className="space-y-1">
              {[
                "Action",
                "Puzzle",
                "Strategy",
                "Casual",
                "Sports",
                "Arcade",
              ].map((cat) => (
                <button
                  key={cat}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium transition-colors group"
                >
                  <Gamepad2
                    size={18}
                    className="text-slate-400 group-hover:text-primary transition-colors"
                  />{" "}
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          {/* Ad Space Placeholder - 侧边栏广告位 */}
          <div className="w-full aspect-300/250 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
            <span className="text-xs font-bold uppercase">Advertisement</span>
          </div>
          <div className="w-full aspect-300/250 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
            <span className="text-xs font-bold uppercase">Advertisement</span>
          </div>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 min-w-0 space-y-10">
        {/* Mobile Search & Categories (Visible only on mobile) */}
        <div className="lg:hidden space-y-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search games..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {["All", "Action", "Puzzle", "Strategy", "Casual"].map((c) => (
              <button
                key={c}
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-bold whitespace-nowrap text-slate-700"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Bento Grid - 核心展示区 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-96">
          {/* Main Featured Game (Big Card) */}
          <Link
            href={`/game/${featuredGame?.slug}`}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 shadow-lg min-h-[250px] md:min-h-0"
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${featuredGame?.thumbnailColor} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase border border-white/10 flex items-center gap-1">
                <Flame size={12} className="text-orange-400 fill-orange-400" />{" "}
                Featured
              </span>
            </div>

            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight group-hover:scale-[1.02] transition-transform origin-left">
                {featuredGame?.title}
              </h2>
              <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                <span className="bg-primary px-2 py-0.5 rounded text-white text-xs font-bold uppercase">
                  {featuredGame?.category}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />{" "}
                  {featuredGame?.rating}
                </span>
                <span>{featuredGame?.plays} plays</span>
              </div>
              <button className="mt-6 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors shadow-lg">
                <Play fill="currentColor" size={18} /> Play Now
              </button>
            </div>
          </Link>

          {/* Side Stack (2 Small Cards) */}
          <div className="flex flex-col gap-4">
            {trendingGames.slice(0, 2).map((game) => (
              <Link
                key={game.id}
                href={`/game/${game.slug}`}
                className="flex-1 relative group overflow-hidden rounded-3xl bg-slate-800 shadow-md min-h-[150px]"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${game.thumbnailColor} opacity-80 group-hover:opacity-100 transition-opacity`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-foreground transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-1">
                    {game.description}
                  </p>
                </div>

                <div className="absolute top-3 right-3 size-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                  <Play size={12} fill="currentColor" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Regular Game Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Zap className="text-yellow-500 fill-yellow-500" /> Popular Games
            </h2>
            <Link
              href="#"
              className="text-sm font-bold text-primary hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {allGames.map((game) => (
              <Link
                key={game.id}
                href={`/game/${game.slug}`}
                className="group bg-white rounded-2xl p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1"
              >
                <div
                  className={`aspect-square rounded-xl bg-linear-to-br ${game.thumbnailColor} relative overflow-hidden mb-3`}
                >
                  {/* Hover Play Button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="size-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                      <Play size={18} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-sm truncate mb-1">
                    {game.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{game.category}</span>
                    <div className="flex items-center gap-0.5">
                      <Star
                        size={10}
                        className="text-yellow-400 fill-yellow-400"
                      />
                      {game.rating}
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* 模拟更多卡片占位，让网格看起来更满 (仅用于演示) */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-3 animate-pulse"
              >
                <div className="aspect-square rounded-xl bg-slate-200 mb-3" />
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-slate-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </section>

        {/* SEO Text - 放在最底部，颜色更淡 */}
        <section className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-sm text-slate-500">
          <h2 className="font-bold text-slate-900 mb-2">
            Free Online Games at AxLudi
          </h2>
          <p className="leading-relaxed">
            You have reached the best destination for free online games. AxLudi
            offers the most fun experience to play alone or with friends. We
            offer instant play to all our games without downloads, login, popups
            or other distractions. Our games are playable on desktop, tablet and
            mobile so you can enjoy them at school, at home or on the road.
          </p>
        </section>
      </main>
    </div>
  );
}
