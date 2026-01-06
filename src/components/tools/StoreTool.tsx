import { ToolComponent } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Plus, Minus } from '@phosphor-icons/react'
import { useState } from 'react'

interface StoreToolProps {
  tool: ToolComponent
}

const sampleProducts = [
  { id: 1, name: 'Product Alpha', price: 49.99, stock: 10 },
  { id: 2, name: 'Product Beta', price: 79.99, stock: 5 },
  { id: 3, name: 'Product Gamma', price: 99.99, stock: 15 },
  { id: 4, name: 'Product Delta', price: 129.99, stock: 8 },
]

export function StoreTool({ tool }: StoreToolProps) {
  const [cart, setCart] = useState<Record<number, number>>({})
  const products = tool.config.products || sampleProducts

  const addToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const newCart = { ...prev }
      if (newCart[id] > 1) {
        newCart[id]--
      } else {
        delete newCart[id]
      }
      return newCart
    })
  }

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p: any) => p.id === parseInt(id))
    return sum + (product?.price || 0) * qty
  }, 0)

  return (
    <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
          <p className="text-muted-foreground">{tool.description}</p>
        </div>
        {Object.keys(cart).length > 0 && (
          <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
            <ShoppingCart size={20} className="text-accent" />
            <span className="font-bold">${cartTotal.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product: any) => (
          <Card key={product.id} className="bg-secondary/20 border-accent/20 p-4">
            <div className="mb-3">
              <h4 className="font-bold text-lg">{product.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-2xl font-bold text-accent">${product.price}</p>
                <Badge variant="outline">{product.stock} in stock</Badge>
              </div>
            </div>
            
            {cart[product.id] ? (
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => removeFromCart(product.id)}>
                  <Minus size={16} />
                </Button>
                <span className="font-bold w-8 text-center">{cart[product.id]}</span>
                <Button size="sm" variant="outline" onClick={() => addToCart(product.id)}>
                  <Plus size={16} />
                </Button>
              </div>
            ) : (
              <Button className="w-full gap-2" onClick={() => addToCart(product.id)}>
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
            )}
          </Card>
        ))}
      </div>
    </Card>
  )
}
