import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface ChartToolProps {
  tool: ToolComponent
}

const sampleData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
]

const COLORS = ['oklch(0.75 0.15 85)', 'oklch(0.35 0.15 290)', 'oklch(0.45 0.12 250)', 'oklch(0.65 0.2 120)']

export function ChartTool({ tool }: ChartToolProps) {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar')
  const data = tool.config.data || sampleData

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
        <p className="text-muted-foreground mb-4">{tool.description}</p>
        
        <div className="flex gap-2">
          <Button 
            variant={chartType === 'bar' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('bar')}
          >
            Bar Chart
          </Button>
          <Button 
            variant={chartType === 'line' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('line')}
          >
            Line Chart
          </Button>
          <Button 
            variant={chartType === 'pie' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('pie')}
          >
            Pie Chart
          </Button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'bar' ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.04 270)" />
              <XAxis dataKey="name" stroke="oklch(0.65 0 0)" />
              <YAxis stroke="oklch(0.65 0 0)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'oklch(0.18 0.02 260)', 
                  border: '1px solid oklch(0.25 0.04 270)',
                  borderRadius: '0.5rem'
                }} 
              />
              <Bar dataKey="value" fill="oklch(0.75 0.15 85)" />
            </BarChart>
          ) : chartType === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.04 270)" />
              <XAxis dataKey="name" stroke="oklch(0.65 0 0)" />
              <YAxis stroke="oklch(0.65 0 0)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'oklch(0.18 0.02 260)', 
                  border: '1px solid oklch(0.25 0.04 270)',
                  borderRadius: '0.5rem'
                }} 
              />
              <Line type="monotone" dataKey="value" stroke="oklch(0.75 0.15 85)" strokeWidth={2} />
            </LineChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="oklch(0.75 0.15 85)"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'oklch(0.18 0.02 260)', 
                  border: '1px solid oklch(0.25 0.04 270)',
                  borderRadius: '0.5rem'
                }} 
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
