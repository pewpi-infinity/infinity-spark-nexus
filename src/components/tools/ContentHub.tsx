import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { marked } from 'marked'

interface ContentHubProps {
  tool: ToolComponent
}

export function ContentHub({ tool }: ContentHubProps) {
  const content = tool.config.content || `## ${tool.title}\n\n${tool.description}\n\nInteractive content hub ready for your information.`

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-8">
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </Card>
  )
}
