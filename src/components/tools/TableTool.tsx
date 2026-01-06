import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

interface TableToolProps {
  tool: ToolComponent
}

const sampleData = [
  { id: 1, name: 'Item Alpha', category: 'Category A', value: 120, status: 'Active' },
  { id: 2, name: 'Item Beta', category: 'Category B', value: 250, status: 'Active' },
  { id: 3, name: 'Item Gamma', category: 'Category A', value: 180, status: 'Pending' },
  { id: 4, name: 'Item Delta', category: 'Category C', value: 340, status: 'Active' },
  { id: 5, name: 'Item Epsilon', category: 'Category B', value: 95, status: 'Inactive' },
]

export function TableTool({ tool }: TableToolProps) {
  const [search, setSearch] = useState('')
  const data = tool.config.data || sampleData
  const columns = tool.config.columns || ['name', 'category', 'value', 'status']

  const filteredData = data.filter((row: any) => 
    Object.values(row).some(val => 
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
        <p className="text-muted-foreground mb-4">{tool.description}</p>
        <Input
          placeholder="Search table..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm cosmic-border"
        />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col: string) => (
                <TableHead key={col} className="capitalize">{col}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((row: any) => (
              <TableRow key={row.id}>
                {columns.map((col: string) => (
                  <TableCell key={col}>{row[col]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
