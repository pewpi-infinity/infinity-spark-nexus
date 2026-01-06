import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/generators'
import { Article } from '@phosphor-icons/react'

interface FeedToolProps {
  tool: ToolComponent
}

const sampleFeed = [
  { id: 1, title: 'Latest Update', content: 'Important announcement about new features', timestamp: Date.now() - 3600000, category: 'News' },
  { id: 2, title: 'Community Highlight', content: 'Spotlight on community contributions', timestamp: Date.now() - 7200000, category: 'Community' },
  { id: 3, title: 'Development Progress', content: 'Check out our latest development updates', timestamp: Date.now() - 10800000, category: 'Development' },
  { id: 4, title: 'Tutorial Released', content: 'New tutorial available for getting started', timestamp: Date.now() - 14400000, category: 'Education' },
]

export function FeedTool({ tool }: FeedToolProps) {
  const items = tool.config.items || sampleFeed

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <div className="space-y-4">
        {items.map((item: any) => (
          <Card key={item.id} className="bg-secondary/20 border-accent/20 p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start gap-3">
                <Article size={24} className="text-accent mt-1" />
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                </div>
              </div>
              <Badge variant="outline">{item.category}</Badge>
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              {formatDate(item.timestamp)}
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}
