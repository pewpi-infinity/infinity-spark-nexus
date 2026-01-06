import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { TrendUp, Users, CurrencyDollar, ChartLine } from '@phosphor-icons/react'

interface DashboardToolProps {
  tool: ToolComponent
}

const sampleMetrics = [
  { label: 'Total Users', value: '12,459', change: '+12%', icon: Users, trend: 'up' },
  { label: 'Revenue', value: '$48,392', change: '+23%', icon: CurrencyDollar, trend: 'up' },
  { label: 'Growth Rate', value: '34.2%', change: '+5.4%', icon: TrendUp, trend: 'up' },
  { label: 'Engagement', value: '89.5%', change: '-2.1%', icon: ChartLine, trend: 'down' },
]

export function DashboardTool({ tool }: DashboardToolProps) {
  const metrics = tool.config.metrics || sampleMetrics

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric: any, index: number) => {
          const Icon = metric.icon || Users
          return (
            <Card key={index} className="bg-secondary/20 border-accent/20 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Icon size={24} className="text-accent" />
                </div>
                <span className={`text-sm font-semibold ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </Card>
  )
}
