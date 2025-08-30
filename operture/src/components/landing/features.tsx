import { Card } from '@/components/ui/card'

export function Features() {
  const features = [
    {
      title: 'Fast & Modern',
      description: 'Built with Next.js 15 and React 19 for optimal performance.'
    },
    {
      title: 'Beautiful UI',
      description: 'Styled with shadcn/ui components and Tailwind CSS.'
    },
    {
      title: 'Database Ready',
      description: 'Integrated with Supabase for backend functionality.'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
