import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { toast } from 'sonner'

interface FormToolProps {
  tool: ToolComponent
}

export function FormTool({ tool }: FormToolProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  
  const fields = tool.config.fields || [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'message', label: 'Message', type: 'textarea', required: false },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
    setFormData({})
  }

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        {fields.map((field: any) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label}
              {field.required && <span className="text-accent ml-1">*</span>}
            </Label>
            {field.type === 'textarea' ? (
              <Textarea
                id={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                required={field.required}
                className="cosmic-border"
                rows={4}
              />
            ) : (
              <Input
                id={field.name}
                type={field.type}
                value={formData[field.name] || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                required={field.required}
                className="cosmic-border"
              />
            )}
          </div>
        ))}
        <Button type="submit" className="w-full md:w-auto cosmic-glow">
          Submit
        </Button>
      </form>
    </Card>
  )
}
