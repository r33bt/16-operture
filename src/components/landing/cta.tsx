import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join thousands of developers building amazing products with our stack.
      </p>
      <Button size="lg">Start Building Now</Button>
    </section>
  )
}
