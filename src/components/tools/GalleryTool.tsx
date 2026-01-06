import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { MagnifyingGlass } from '@phosphor-icons/react'

interface GalleryToolProps {
  tool: ToolComponent
}

const placeholderImages = [
  { id: 1, title: 'Gallery Item 1', color: 'oklch(0.45 0.12 250)' },
  { id: 2, title: 'Gallery Item 2', color: 'oklch(0.35 0.15 290)' },
  { id: 3, title: 'Gallery Item 3', color: 'oklch(0.75 0.15 85)' },
  { id: 4, title: 'Gallery Item 4', color: 'oklch(0.55 0.18 180)' },
  { id: 5, title: 'Gallery Item 5', color: 'oklch(0.65 0.2 330)' },
  { id: 6, title: 'Gallery Item 6', color: 'oklch(0.60 0.17 120)' },
]

export function GalleryTool({ tool }: GalleryToolProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const images = tool.config.images || placeholderImages

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image: any) => (
          <button
            key={image.id}
            className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer transition-transform hover:scale-105"
            style={{ backgroundColor: image.color }}
            onClick={() => setSelectedImage(image.id)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <MagnifyingGlass 
                size={32} 
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm font-medium">{image.title}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="cosmic-border bg-card max-w-3xl">
          {selectedImage && (
            <div className="space-y-4">
              <div 
                className="aspect-video rounded-lg"
                style={{ backgroundColor: images.find((i: any) => i.id === selectedImage)?.color }}
              />
              <h3 className="text-xl font-bold">
                {images.find((i: any) => i.id === selectedImage)?.title}
              </h3>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}
