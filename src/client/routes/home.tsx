export default function HomePage() {
  const stack = [
    {
      name: 'Deno',
      url: 'https://deno.com',
      description: 'Secure runtime for JavaScript and TypeScript',
    },
    {
      name: 'Hono',
      url: 'https://hono.dev',
      description: 'Ultrafast web framework for the Edges',
    },
    {
      name: 'Vite',
      url: 'https://vite.dev',
      description: 'Next generation frontend tooling',
    },
    {
      name: 'Tailwind CSS',
      url: 'https://tailwindcss.com',
      description: 'A utility-first CSS framework',
    },
    {
      name: 'shadcn/ui',
      url: 'https://ui.shadcn.com',
      description: 'Beautifully designed components built with Radix UI',
    },
    {
      name: 'TanStack Router',
      url: 'https://tanstack.com/router',
      description: 'Type-safe router for React applications',
    },
  ]

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-2">
        Deno + Hono + Vite Stack
      </h1>
      <p className="text-[hsl(var(--foreground))]/60 mb-8">
        A minimal fullstack TypeScript SPA with server-side API.
      </p>
      <ul className="space-y-4">
        {stack.map((item) => (
          <li key={item.name} className="flex items-start gap-3">
            <span className="mt-0.5 h-2 w-2 rounded-full bg-[hsl(var(--primary))] shrink-0 mt-2" />
            <div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[hsl(var(--foreground))] hover:underline"
              >
                {item.name}
              </a>
              <p className="text-sm text-[hsl(var(--foreground))]/60">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
