import { useState, useEffect, useCallback } from 'react'
import { Button } from '../components/ui/button'

export default function DateTimePage() {
  const [datetime, setDatetime] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchDatetime = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/datetime')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setDatetime(data.datetime)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchDatetime()
  }, [fetchDatetime])

  const formatted = datetime
    ? new Intl.DateTimeFormat('cs-CZ', {
        dateStyle: 'full',
        timeStyle: 'long',
      }).format(new Date(datetime))
    : null

  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-2">
        Server Date &amp; Time
      </h1>
      <p className="text-[hsl(var(--foreground))]/60 mb-8">
        Current datetime from the Hono API endpoint.
      </p>
      <div className="rounded-lg border border-[hsl(var(--border))] p-6 mb-6 min-h-[80px] flex items-center">
        {loading && (
          <span className="text-[hsl(var(--foreground))]/50 text-sm">Loading…</span>
        )}
        {error && (
          <span className="text-red-500 text-sm">Error: {error}</span>
        )}
        {!loading && !error && formatted && (
          <span className="text-[hsl(var(--foreground))] font-medium">{formatted}</span>
        )}
      </div>
      <Button onClick={fetchDatetime} disabled={loading}>
        {loading ? 'Refreshing…' : 'Refresh'}
      </Button>
    </div>
  )
}
