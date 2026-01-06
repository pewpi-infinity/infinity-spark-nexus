import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Circle } from '@phosphor-icons/react'

interface TimelineToolProps {
  tool: ToolComponent
}

const sampleEvents = [
  { year: '2024 Q1', title: 'Project Launch', description: 'Initial release and deployment', status: 'completed' },
  { year: '2024 Q2', title: 'Feature Expansion', description: 'New capabilities added', status: 'completed' },
  { year: '2024 Q3', title: 'Community Growth', description: 'User base expansion', status: 'in-progress' },
  { year: '2024 Q4', title: 'Scale & Optimize', description: 'Performance improvements', status: 'planned' },
  { year: '2025 Q1', title: 'Global Rollout', description: 'Worldwide availability', status: 'planned' },
]

export function TimelineTool({ tool }: TimelineToolProps) {
  const events = tool.config.events || sampleEvents

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <div className="space-y-6 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/30" />
        
        {events.map((event: any, index: number) => (
          <div key={index} className="flex gap-4 relative">
            <div className="relative z-10">
              <Circle 
                size={32} 
                weight={event.status === 'completed' ? 'fill' : event.status === 'in-progress' ? 'bold' : 'regular'}
                className={
                  event.status === 'completed' 
                    ? 'text-accent' 
                    : event.status === 'in-progress' 
                    ? 'text-secondary' 
                    : 'text-muted-foreground'
                }
              />
            </div>
            
            <div className="flex-1 pb-6">
              <div className="bg-secondary/20 rounded-lg p-4 cosmic-border">
                <div className="text-sm text-accent font-mono mb-1">{event.year}</div>
                <h4 className="text-lg font-bold mb-1">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
