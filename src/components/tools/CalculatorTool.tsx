import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Calculator as CalcIcon } from '@phosphor-icons/react'

interface CalculatorToolProps {
  tool: ToolComponent
}

export function CalculatorTool({ tool }: CalculatorToolProps) {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === '0' ? num : prev + num)
  }

  const handleOperation = (op: string) => {
    setPreviousValue(parseFloat(display))
    setOperation(op)
    setDisplay('0')
  }

  const handleEquals = () => {
    if (previousValue !== null && operation) {
      const current = parseFloat(display)
      let result = 0
      switch (operation) {
        case '+': result = previousValue + current; break
        case '-': result = previousValue - current; break
        case '*': result = previousValue * current; break
        case '/': result = previousValue / current; break
      }
      setDisplay(result.toString())
      setPreviousValue(null)
      setOperation(null)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
  }

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <CalcIcon size={28} className="text-accent" />
          <h3 className="text-2xl font-bold">{tool.title}</h3>
        </div>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <div className="max-w-sm mx-auto space-y-4">
        <Input 
          value={display} 
          readOnly 
          className="text-right text-2xl font-mono h-16 cosmic-border bg-secondary/20"
        />
        
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map(btn => (
            <Button 
              key={btn} 
              variant={['/', '*', '-', '+'].includes(btn) ? 'default' : 'outline'}
              onClick={() => ['/', '*', '-', '+'].includes(btn) ? handleOperation(btn) : handleNumber(btn)}
              className="h-12 text-lg"
            >
              {btn}
            </Button>
          ))}
          {['4', '5', '6', '*'].map(btn => (
            <Button 
              key={btn} 
              variant={['/', '*', '-', '+'].includes(btn) ? 'default' : 'outline'}
              onClick={() => ['/', '*', '-', '+'].includes(btn) ? handleOperation(btn) : handleNumber(btn)}
              className="h-12 text-lg"
            >
              {btn}
            </Button>
          ))}
          {['1', '2', '3', '-'].map(btn => (
            <Button 
              key={btn} 
              variant={['/', '*', '-', '+'].includes(btn) ? 'default' : 'outline'}
              onClick={() => ['/', '*', '-', '+'].includes(btn) ? handleOperation(btn) : handleNumber(btn)}
              className="h-12 text-lg"
            >
              {btn}
            </Button>
          ))}
          {['0', '.', '=', '+'].map(btn => (
            <Button 
              key={btn} 
              variant={btn === '=' || ['/', '*', '-', '+'].includes(btn) ? 'default' : 'outline'}
              onClick={() => {
                if (btn === '=') handleEquals()
                else if (['/', '*', '-', '+'].includes(btn)) handleOperation(btn)
                else handleNumber(btn)
              }}
              className="h-12 text-lg"
            >
              {btn}
            </Button>
          ))}
        </div>
        
        <Button onClick={handleClear} variant="destructive" className="w-full">
          Clear
        </Button>
      </div>
    </Card>
  )
}
