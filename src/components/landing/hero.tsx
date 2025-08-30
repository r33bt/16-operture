import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <Badge variant="outline" className="mb-4">
        ✨ New Launch
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Build Something Amazing
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Create beautiful landing pages with Next.js, shadcn/ui, and Supabase.
        Fast, modern, and ready for production.
      </p>
      <div className="flex gap-4 justify-center">
        <Button size="lg">Get Started</Button>
        <Button variant="outline" size="lg">Learn More</Button>
      </div>
    </section>
  )
}
