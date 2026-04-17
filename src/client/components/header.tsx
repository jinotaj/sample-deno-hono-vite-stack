import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <nav className="container mx-auto flex items-center gap-6 px-4 py-3">
        <span className="font-semibold text-[hsl(var(--foreground))]">Deno Stack</span>
        <Link
          to="/"
          className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors [&.active]:text-[hsl(var(--foreground))] [&.active]:font-medium"
          activeProps={{ className: 'active' }}
        >
          Home
        </Link>
        <Link
          to="/datetime"
          className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] transition-colors [&.active]:text-[hsl(var(--foreground))] [&.active]:font-medium"
          activeProps={{ className: 'active' }}
        >
          Date &amp; Time
        </Link>
      </nav>
    </header>
  )
}
