export function Hero() {
  return (
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
  )
}
