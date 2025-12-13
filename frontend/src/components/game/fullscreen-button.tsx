'use client'

import { useState, useEffect } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FullscreenButtonProps {
  targetRef: React.RefObject<HTMLElement | null>
  className?: string
}

export function FullscreenButton({ targetRef, className }: FullscreenButtonProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const toggleFullscreen = async () => {
    if (!targetRef.current) return

    try {
      if (!document.fullscreenElement) {
        await targetRef.current.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFullscreen}
      className={className}
      title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    >
      {isFullscreen ? (
        <Minimize2 size={18} />
      ) : (
        <Maximize2 size={18} />
      )}
    </Button>
  )
}

