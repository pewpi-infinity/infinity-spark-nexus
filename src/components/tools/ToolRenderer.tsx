import { ToolComponent } from '@/lib/types'
import { VideoPlayer } from './VideoPlayer'
import { ChartTool } from './ChartTool'
import { GalleryTool } from './GalleryTool'
import { TimelineTool } from './TimelineTool'
import { DashboardTool } from './DashboardTool'
import { StoreTool } from './StoreTool'
import { CalculatorTool } from './CalculatorTool'
import { ContentHub } from './ContentHub'
import { FormTool } from './FormTool'
import { TableTool } from './TableTool'
import { FeedTool } from './FeedTool'
import { CalendarTool } from './CalendarTool'

interface ToolRendererProps {
  tool: ToolComponent
}

export function ToolRenderer({ tool }: ToolRendererProps) {
  switch (tool.type) {
    case 'video-player':
      return <VideoPlayer tool={tool} />
    case 'chart':
      return <ChartTool tool={tool} />
    case 'gallery':
      return <GalleryTool tool={tool} />
    case 'timeline':
      return <TimelineTool tool={tool} />
    case 'dashboard':
      return <DashboardTool tool={tool} />
    case 'store':
      return <StoreTool tool={tool} />
    case 'calculator':
      return <CalculatorTool tool={tool} />
    case 'form':
      return <FormTool tool={tool} />
    case 'table':
      return <TableTool tool={tool} />
    case 'feed':
      return <FeedTool tool={tool} />
    case 'calendar':
      return <CalendarTool tool={tool} />
    case 'content-hub':
      return <ContentHub tool={tool} />
    default:
      return <ContentHub tool={tool} />
  }
}
