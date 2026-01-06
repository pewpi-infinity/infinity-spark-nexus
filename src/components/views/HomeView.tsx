import { useState } from 'react'
import { InfinitySearch } from '@/components/InfinitySearch'
import { ThemeSelector } from '@/components/ThemeSelector'
import { WebsiteTheme } from '@/lib/types'
import { Card } from '@/components/ui/card'

interface HomeViewProps {
  onCreateWebsite: (query: string, theme: WebsiteTheme) => void
  isCreating: boolean
}

export function HomeView({ onCreateWebsite, isCreating }: HomeViewProps) {
  const [selectedTheme, setSelectedTheme] = useState<WebsiteTheme>('cosmic')

  const handleSearch = (query: string) => {
    onCreateWebsite(query, selectedTheme)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent animate-cosmic-pulse">
              INFINITY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Turn ideas into live websites with working tools — instantly. Every website is a token. Every tool adds value.
          </p>
        </div>

        <Card className="cosmic-border bg-card/50 backdrop-blur-sm p-6">
          <ThemeSelector
            selectedTheme={selectedTheme}
            onSelectTheme={setSelectedTheme}
          />
        </Card>

        <div className="w-full">
          <InfinitySearch
            onSearch={handleSearch}
            isLoading={isCreating}
            placeholder="What world will you build?"
            size="large"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="text-4xl">⚡</div>
            <h3 className="text-lg font-semibold text-foreground">Working Tools, Instant</h3>
            <p className="text-sm text-muted-foreground">
              Real functional components render on first load — no placeholders
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🪙</div>
            <h3 className="text-lg font-semibold text-foreground">Token Per Function</h3>
            <p className="text-sm text-muted-foreground">
              Each tool mints value — websites are collectible assets
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🏪</div>
            <h3 className="text-lg font-semibold text-foreground">Real Marketplace</h3>
            <p className="text-sm text-muted-foreground">
              Trade ownership of live websites with real functionality
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
