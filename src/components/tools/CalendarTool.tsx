import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar as CalIcon } from '@phosphor-icons/react'

interface CalendarToolProps {
  tool: ToolComponent
}

const sampleEvents = [
  { id: 1, title: 'Project Kickoff', date: '2024-12-15', time: '10:00 AM', type: 'meeting' },
  { id: 2, title: 'Design Review', date: '2024-12-18', time: '2:00 PM', type: 'review' },
  { id: 3, title: 'Launch Day', date: '2024-12-22', time: '9:00 AM', type: 'milestone' },
  { id: 4, title: 'Team Sync', date: '2024-12-20', time: '11:00 AM', type: 'meeting' },
]

export function CalendarTool({ tool }: CalendarToolProps) {
  const events = tool.config.events || sampleEvents

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <CalIcon size={28} className="text-accent" />
          <h3 className="text-2xl font-bold">{tool.title}</h3>
        </div>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <div className="space-y-3">
        {events.map((event: any) => (
          <Card key={event.id} className="bg-secondary/20 border-accent/20 p-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold mb-1">{event.title}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                </div>
              </div>
              <Badge variant="outline" className="capitalize">{event.type}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}
