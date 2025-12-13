'use client'

import { useRef } from 'react'
import { FullscreenButton } from '@/components/game/fullscreen-button'

interface GameContainerProps {
  gameFile: string
  gameTitle: string
  children?: React.ReactNode
}

export function GameContainer({ gameFile, gameTitle, children }: GameContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      ref={containerRef}
      className="bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative group"
    >
      {/* Toolbar with Fullscreen Button */}
      {/* Mobile: hidden, Desktop: visible on hover */}
      <div className="hidden md:flex absolute top-2 right-2 md:top-4 md:right-4 z-10 gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
        <FullscreenButton 
          targetRef={containerRef}
        />
      </div>

      {/* Game Iframe - Mobile: 4:5 aspect ratio for better vertical space, Desktop: 16:9 */}
      <div className="aspect-4/5 md:aspect-video w-full bg-slate-50 relative">
        <iframe
          src={`/games/${gameFile}`}
          className="absolute inset-0 w-full h-full border-0"
          title={gameTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-pointer-lock"
        />
      </div>

      {/* Game Info Bar */}
      {children}
    </div>
  )
}

