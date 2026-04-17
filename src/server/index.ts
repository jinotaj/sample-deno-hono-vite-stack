import { serveStatic } from 'hono/deno'
import app from './app.ts'

app.use('/*', serveStatic({ root: './dist' }))
app.get('*', serveStatic({ path: './dist/index.html' }))

Deno.serve(app.fetch)
