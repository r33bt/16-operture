export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="inline-block px-3 py-1 mb-4 text-sm bg-blue-100 text-blue-800 rounded-full">
          ✨ New Launch
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Build Something Amazing
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create beautiful landing pages with Next.js, shadcn/ui, and Supabase.
          Fast, modern, and ready for production.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of developers building amazing products with our stack.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Start Building Now
        </button>
      </section>
    </main>
  )
}
