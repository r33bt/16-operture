export function Features() {
  return (
    <section className="container mx-auto px-4 py-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-4">Fast & Modern</h3>
          <p className="text-gray-600">Built with Next.js 15 and React 19 for optimal performance.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-4">Beautiful UI</h3>
          <p className="text-gray-600">Styled with shadcn/ui components and Tailwind CSS.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-4">Database Ready</h3>
          <p className="text-gray-600">Integrated with Supabase for backend functionality.</p>
        </div>
      </div>
    </section>
  )
}
