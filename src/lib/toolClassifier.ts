export type ToolPrimitive = 
  | 'video-player'
  | 'chart'
  | 'gallery'
  | 'timeline'
  | 'map'
  | 'dashboard'
  | 'store'
  | 'calculator'
  | 'text-editor'
  | 'calendar'
  | 'feed'
  | 'chat'
  | 'form'
  | 'table'
  | 'audio-player'
  | 'code-editor'
  | 'kanban'
  | 'search'
  | 'analytics'
  | 'content-hub'

export interface ToolSpec {
  type: ToolPrimitive
  config: Record<string, any>
  title: string
  description: string
}

export async function classifyIntentToTools(query: string): Promise<ToolSpec[]> {
  const promptText = `Analyze this user intent and determine what functional tools should be built immediately: "${query}"

Tool primitives available:
- video-player: for video content, tutorials, media
- chart: for data visualization, stats, metrics
- gallery: for image collections, portfolios, showcases
- timeline: for history, events, roadmaps
- map: for locations, geography, travel
- dashboard: for metrics, KPIs, analytics overview
- store: for products, shopping, e-commerce
- calculator: for computations, converters, estimators
- text-editor: for writing, documentation, notes
- calendar: for events, scheduling, dates
- feed: for news, updates, social content
- chat: for messaging, support, community
- form: for data collection, surveys, contact
- table: for structured data, lists, databases
- audio-player: for music, podcasts, audio
- code-editor: for programming, snippets, technical docs
- kanban: for task management, workflows
- search: for finding, filtering, discovery
- analytics: for insights, reports, tracking
- content-hub: for articles, research, information

Return ONLY valid JSON with 1-3 tools that should be immediately functional. Format:
{
  "tools": [
    {
      "type": "tool-name",
      "title": "Tool Display Name",
      "description": "What this tool does",
      "config": {
        "key": "value"
      }
    }
  ]
}`

  try {
    const response = await window.spark.llm(promptText, 'gpt-4o', true)
    const parsed = JSON.parse(response)
    return parsed.tools || []
  } catch (error) {
    console.error('Error classifying intent:', error)
    return [{
      type: 'content-hub',
      title: 'Information Hub',
      description: 'Explore information about ' + query,
      config: { query }
    }]
  }
}

export function getToolValue(toolType: ToolPrimitive): number {
  const valueMap: Record<ToolPrimitive, number> = {
    'video-player': 500,
    'chart': 400,
    'gallery': 300,
    'timeline': 350,
    'map': 450,
    'dashboard': 600,
    'store': 700,
    'calculator': 300,
    'text-editor': 400,
    'calendar': 350,
    'feed': 400,
    'chat': 500,
    'form': 300,
    'table': 400,
    'audio-player': 450,
    'code-editor': 500,
    'kanban': 500,
    'search': 400,
    'analytics': 550,
    'content-hub': 250
  }
  return valueMap[toolType] || 300
}
