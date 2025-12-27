import { notFound } from "next/navigation";
import { getGameBySlug, games } from "@/lib/games";
import Link from "next/link";
import Image from "next/image";
import { Share2, ThumbsUp, Play } from "lucide-react";
import { Metadata } from "next";
import { GameContainer } from "@/components/game/game-container";
import { Button } from "@/components/ui/button";

// Force static generation - critical for SEO and CDN deployment
export const dynamic = "force-static";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return { title: "Game Not Found" };
  }

  return {
    title: `Play ${game.title} - Free Online Game`,
    description: `Play ${game.title} online for free. ${game.description}`,
    keywords: game.keywords.join(", "),
  };
}

// Generate static params for SSG
export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  // Find related games (exclude current)
  const relatedGames = games.filter((g) => g.id !== game.id).slice(0, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* Main Content Area (2/3 width on large screens) */}
      <div className="lg:col-span-3 space-y-4 md:space-y-6">
        {/* Game Container */}
        <GameContainer gameFile={game.file} gameTitle={game.title}>
          {/* Game Controls / Info Bar - Simplified on mobile */}
          <div className="p-3 md:p-4 lg:p-6 border-t border-slate-100 bg-white">
            {/* Mobile: Compact single row */}
            <div className="flex items-center justify-between md:hidden">
              <h1 className="text-lg font-bold text-slate-900 truncate flex-1 mr-3">
                {game.title}
              </h1>
              <div className="flex gap-2 shrink-0">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <ThumbsUp size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>

            {/* Desktop: Full layout */}
            <div className="hidden md:flex md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">
                  {game.title}
                </h1>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {game.keywords.slice(0, 3).map((k) => (
                    <span
                      key={k}
                      className="text-xs text-muted-foreground bg-slate-100 px-2 py-0.5 rounded-full"
                    >
                      #{k}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost">
                  <ThumbsUp size={18} />
                </Button>
                <Button variant="ghost">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
          </div>
        </GameContainer>

        

        {/* Mobile: Related Games (before description) */}
        <div className="md:hidden bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-base text-slate-900 mb-3">
            You May Also Like
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
            {relatedGames.map((related) => (
              <Link
                key={related.id}
                href={`/game/${related.slug}`}
                className="shrink-0 w-32 snap-start"
              >
                <div className="aspect-4/3 rounded-lg bg-slate-100 shadow-md mb-2 relative overflow-hidden active:opacity-80 transition-opacity group">
                  <Image
                    src={`/games/${related.cover}`}
                    alt={related.title}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-active:bg-black/10 transition-colors">
                    <Play size={18} className="text-white opacity-90 drop-shadow-lg" />
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-xs truncate">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* Description / SEO Text */}
        <div className="bg-white p-4 md:p-5 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm">
          <div className="prose prose-slate prose-sm md:prose-base max-w-none">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-2 md:mb-3">
              About {game.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{game.description}</p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Play <strong>{game.title}</strong> directly in your browser
              without downloading. This game is part of our extensive collection
              of {game.keywords.slice(0, 2).join(" and ")}. Enjoy the challenge and
              share your high score with friends!
            </p>
            <h4 className="text-sm md:text-base lg:text-lg font-bold text-slate-900 mb-2 mt-4 md:mt-6">
              How to Play
            </h4>
            <ul className="space-y-1 md:space-y-1.5 text-slate-600 text-sm md:text-base">
              <li>Click &quot;Start&quot; to begin the game.</li>
              <li>Follow the on-screen instructions inside the game window.</li>
              <li>Try to beat your high score or challenge a friend!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar (1/3 width) - Related & Ads - Desktop only */}
      <div className="hidden md:block space-y-6">
        {/* Related Games - Show first for better UX */}
        <div className="bg-white p-5 md:p-6 rounded-3xl border border-slate-100 shadow-sm lg:sticky lg:top-24">
          <h3 className="font-bold text-lg text-slate-900 mb-4">
            You May Also Like
          </h3>

          {/* Desktop: Vertical Stack */}
          <div className="hidden md:flex md:flex-col md:gap-4">
            {relatedGames.map((related) => (
              <Link
                key={related.id}
                href={`/game/${related.slug}`}
                className="flex gap-3 group items-center rounded-lg hover:bg-slate-50 p-2 transition-colors"
              >
                <div className="w-16 h-12 rounded-lg bg-slate-100 shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform shadow-sm">
                  <Image
                    src={`/games/${related.cover}`}
                    alt={related.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-primary transition-colors truncate">
                    {related.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {related.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
            {relatedGames.map((related) => (
              <Link
                key={related.id}
                href={`/game/${related.slug}`}
                className="shrink-0 w-40 snap-start"
              >
                <div className="aspect-4/3 rounded-xl bg-slate-100 shadow-md mb-2 relative overflow-hidden group">
                  <Image
                    src={`/games/${related.cover}`}
                    alt={related.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-active:bg-black/10 transition-colors flex items-center justify-center">
                    <Play size={20} className="text-white opacity-90 drop-shadow-lg" />
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-sm truncate">
                  {related.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Ad Placeholder - After content for better UX */}
        <div className="bg-slate-50 rounded-2xl p-4 min-h-[250px] flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed border-slate-200 lg:sticky lg:top-[500px]">
          <span className="font-semibold text-sm">Advertisement</span>
          <span className="text-xs text-center mt-2 px-8 opacity-60">
            High-converting Ad Unit (300x250)
          </span>
        </div>
      </div>
    </div>
  );
}
