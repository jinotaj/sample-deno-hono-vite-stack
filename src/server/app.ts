import { Hono } from 'hono'

const app = new Hono()

app.get('/api/datetime', (c) => {
  return c.json({ datetime: new Date().toISOString() })
})

export default app
