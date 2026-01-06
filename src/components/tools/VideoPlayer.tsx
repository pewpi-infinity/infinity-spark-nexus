import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Play, Pause } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface VideoPlayerProps {
  tool: ToolComponent
}

export function VideoPlayer({ tool }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoUrl = tool.config.videoUrl || ''
  const placeholder = tool.config.placeholder || 'Video player ready'

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
        <p className="text-muted-foreground mb-4">{tool.description}</p>
      </div>
      
      <div className="aspect-video bg-muted/20 flex items-center justify-center relative">
        {videoUrl ? (
          <video 
            src={videoUrl} 
            controls 
            className="w-full h-full"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          <div className="text-center space-y-4 p-8">
            <div className="text-6xl text-accent/50">🎬</div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">{placeholder}</p>
              <p className="text-sm text-muted-foreground">
                Video player interface active and ready for content
              </p>
            </div>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isPlaying ? 'Pause' : 'Play'} Demo
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}
